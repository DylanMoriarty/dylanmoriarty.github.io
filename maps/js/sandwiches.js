/****** GLOBAL VARIABLES *******/
var width = 840, height = 460;

/*---*******---END OF GLOBAL VARIABLES---*******---*/
//--------------------------------------------------/

window.onload = initialize();

function initialize(){
	setMap();
};

function setMap(){

	var projection = d3.geo.albers()
		.center([0, 43.0736])
		.rotate([89.3965])
		.parallels([50, 60])
	    .scale(1800000)
	    .translate([width / 2, height / 2])

	var path = d3.geo.path()
		.projection(projection);

	// var voronoi = d3.geom.voronoi()
	//     .x(function(d) { return d.x; })
	//     .y(function(d) { return d.y; })
	//     .clipExtent([[0, 0], [width, height]]);

	var svg = d3.select("#map").append("svg")
		.attr("width", width)
		.attr("height", height)
		.attr("class", "mapcontain");

	queue()
		.defer(d3.json, "data/Sandwiches/voronoi50.json")
		.defer(d3.json, "data/Sandwiches/madison.json")
		.defer(d3.json, "data/Sandwiches/madroads.json")
		.defer(d3.csv, "data/Sandwiches/sandwiches.csv")
		.await(ready);

	function ready(error, voronoi, mad, roads, shops){
		var positions = [];

        shops = shops.filter(function(d){
        	if (d.count = shops.length){
		        d[0] = +d.longitude;
		        d[1] = +d.latitude;
		        var position = projection(d);
		        d.x = position[0];
		        d.y = position[1];
		        return true;
        	}
        })

        for (var i=0; i<shops.length; i++){
        // console.log(shops[i])
        	};
    	// voronoi(shops)
     //   		 .forEach(function(d) { d.point.cell = d; });

		// svg.append("path")
		// 	.datum(topojson.feature(mad, mad.objects.MadisonRoads2))
		// 	.attr("class", "roads")
		// 	.attr("d", path);

		svg.append("path")
			.datum(topojson.feature(roads, roads.objects.roads))
			.attr("class", "roads")
			.attr("d", path);

		svg.append("path")
			.datum(topojson.feature(mad, mad.objects.MadisonBuildings))
			.attr("class", "buildings")
			.attr("d", path);

		svg.append("path")
			.datum(topojson.feature(mad, mad.objects.MadisonWater))
			.attr("class", "water")
			.attr("d", path);		

     	var blocks = svg.selectAll("lines")
			.data(topojson.feature(voronoi, voronoi.objects.VoronoiLast).features)
			.enter()
			.append("g")
			.attr("class", "lines")
			.append("path")
			.attr("class", function(d) {
				return d.properties.stringid })
			.attr("d", path)
			.on("mouseover", highlight)
			.on("mouseleave", dehighlight);

 		var shops = svg.append("g")
       	 .attr("class", "shops")
       	 .selectAll("g")
         .data(shops)
         .enter()
         .append("g")
         .attr("class", "shops")

 	   // shops.append("path")
	    //     .attr("class", "cell")
	    //     .attr("d", function(d) { return d.cell.length ? "M" + d.cell.join("L") + "Z" : null; });

        shops.append("circle")
        	.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
	        .attr("r", 2.5);

	};

		// GenerateVonoroi(shops)
};

function GenerateVoronoi(shops){

	console.log("aaaaahhhhhhh")

};

function highlight(data){
	var props = data.properties ? data.properties : data;

		d3.selectAll("."+props.stringid)
		.style("fill", "rgba(255,214,103,0.2")
		.style("stroke-width", "1px");

	var labelimage = "<img src='./img/sandshops/"+props.img+".png'></img>";

	var labelname = props.name

	var infobox = d3.select("#mapcontain").append("div")
		.attr("class", "infobox")
		.attr("id", props.stringid+"info")
		.html(labelimage)
		.append("div")
		// .attr("class", "labelname")
		// .html(labelname)
};

function dehighlight(data){
	var props = data.properties ? data.properties : data;
	
	var region = d3.select("."+props.stringid);
	
	region.style("fill", "rgba(0,0,0,0");
	region.style("stroke-width", "0px");

	d3.select("#"+props.stringid+"info").remove();
};