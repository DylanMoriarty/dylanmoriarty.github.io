/*********************************************************
G575 D3 Lab
**********************************************************/

//Global Variables
var keyArray = ["Null", "Christinaity", "Islam", "Buddhism", "Judaism", "Hinduism"];
var expressed = keyArray[0];
var colorize;
var mapWidth = 960, mapHeight = 100; //map frame dimension
var chartWidth = 960, chartHeight = 80; //chart frame dimensions
var chart = d3.select("body")
    .append("svg")
    .attr("width", chartWidth)
    .attr("height", chartHeight)
    .attr("class", "chart")

//Set Up Script
window.onload = initialize();

// Start Here!
function initialize(){
  setMap();
  settitle();
};

function settitle(){
  var width = 960;
  var height = 36;
};

//Defer Data to help with loading
function setMap(){
  queue()
  .defer(d3.csv, "data/Religion.csv")
  .defer(d3.json, "data/world.json")
  .await(callback)

  //map frame
  var width = 960;
  var height = 460;

  var map = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("class", "map");

  var projection = d3.geo.equirectangular()
      .scale(153)
      .translate([width / 2, height / 2])
      .precision(.1);


  var path = d3.geo.path()
    .projection(projection);

  //The Big One
  function callback(error, csvData, world){
    colorize = colorScale(csvData); //retrieve color scale generator

      //variables for csv to json data transfer
      var jsonCountries = world.objects.countries.geometries;
      //loop through csv data to assign each csv province's values to json province properties

      for (var i=0; i<csvData.length; i++) {    
        var csvCountries = csvData[i]; //the current province's attributes
        var csvAdm = csvCountries.id; //admin code

        //loop through json provinces to assign csv data to the right province
        for (var a=0; a<jsonCountries.length; a++){

          //where codes match, attach csv data to json object
          if (jsonCountries[a].properties.su_a3 == csvAdm){
            //one more for loop to assign all key/value pairs to json object
            for (var key in keyArray){
              var attr = keyArray[key];
              var val = parseFloat(csvCountries[attr]);
              jsonCountries[a].properties[attr] = val;
            };
            jsonCountries[a].properties.name = csvCountries.name.replace(/ /g, "_"); //set prop
            break; //stop looking through the json provinces
          };
        };
      };

    // End of data union functions

    // Draw Countries
    var chorocountries = map.selectAll(".countries")
      .data(topojson.feature(world, world.objects.countries).features)
      .enter()
      .append("g")
      .attr("class", "chorocountries")
      .append("path")
      .attr("class", function(d){ return d.properties.name})
      .attr("d", path)
      .style("fill", function(d){
        return choropleth(d, colorize);
      })
      .on("mouseover", highlight)
      .on("mouseout", dehighlight)
      .append("desc")
        .text(function(d){
          return choropleth(d, colorize);
        });
    //callback end
    createfoodbox(csvData); //create Food Box
    setChart(csvData, colorize); //Make those bars
    };
  };


//Circle Central. Eventually convert to spec sheet for Food Image SVGs
function createfoodbox(csvData){
  //-----------------------------------------------   Christians  
    var AlmondC = d3.selectAll("#chris")
      .style("fill-opacity", 0)
      .attr("cx", function(d, i) { return i * 100 + 50; })
      .on("mouseover", function(){
        d3.select(this).style("stroke", "#706F22").style("stroke-width", 2 ).style("stroke-dasharray", "5,5");
      }).on("mouseout", function(){
        d3.select(this).style("stroke", "none").style("stroke-width", 0)
      }).on("click", function(){
          changeAttribute(keyArray[1], csvData); 
      });
  //-----------------------------------------------   Muslim 
    var AppleC = d3.selectAll("#muslim")
      .style("fill-opacity", 0)
      .attr("cx", function(d, i) { return i * 100 + 120; })
      .on("mouseover", function(){
        d3.select(this).style("stroke", "#006400").style("stroke-width", 2 ).style("stroke-dasharray", "5,5");
      }).on("mouseout", function(){
        d3.select(this).style("stroke", "none").style("stroke-width", 0)
      }).on("click", function(){
          changeAttribute(keyArray[2], csvData); 
      });
  //-----------------------------------------------    Buddha
    var BananaC = d3.selectAll("#buddha")
      .style("fill-opacity", 0)
      .attr("cx", function(d, i) { return i * 100 + 190; })
      .on("mouseover", function(){
        d3.select(this).style("stroke", "#c98b00").style("stroke-width", 2 ).style("stroke-dasharray", "5,5");
      }).on("mouseout", function(){
        d3.select(this).style("stroke", "none").style("stroke-width", 0)
      }).on("click", function(){
          changeAttribute(keyArray[3], csvData); 
      });
  //-----------------------------------------------    Judaism
    var BlueC = d3.selectAll("#judaism")
      .style("fill-opacity", 0)
      .attr("cx", function(d, i) { return i * 100 + 260; })
      .on("mouseover", function(){
        d3.select(this).style("stroke", "blue").style("stroke-width", 2 ).style("stroke-dasharray", "5,5");
      }).on("mouseout", function(){
        d3.select(this).style("stroke", "none").style("stroke-width", 0)
      }).on("click", function(){
          changeAttribute(keyArray[4], csvData); 
      });
  //-----------------------------------------------    Hindu 
    var CarrotC = d3.selectAll("#hindu")
      .style("fill-opacity", 0)
      .attr("cx", function(d, i) { return i * 100 + 330; })
      .on("mouseover", function(){
        d3.select(this).style("stroke", "#d95f0e").style("stroke-width", 2 ).style("stroke-dasharray", "5,5");
      }).on("mouseout", function(){
        d3.select(this).style("stroke", "none").style("stroke-width", 0)
      }).on("click", function(){
          changeAttribute(keyArray[5], csvData); 
      });
  };

//Initially create bars
function setChart(csvData, colorize){
  var bars = chart.selectAll(".bar")
    .data(csvData)
    .enter()
    .append("rect")
    .sort(function(a, b){return a[expressed]-b[expressed]})
    .attr("class", function(d){
      return "bar " + d.name.replace(/ /g, "_");})
    .on("mouseover", highlight)
    .on("mouseout", dehighlight);

  updateChart(bars, csvData);
};

function colorScale(csvData){
  //create quantile classes with color scale
  //-----------------------------------------------  Apples
  if(expressed === "Christinaity"){
  var color = d3.scale.quantile() 
    .range([
      "#f9f4a7",
      "#f8ef71",
      "#e6db3c",
      "#b0a71e",
      "#8d8400"
  //-----------------------------------------------  Null
    ])}else if(expressed === "Null"){
    var color = d3.scale.quantile()
    .range([
      "#BFBFBF"
 //-----------------------------------------------  Almonds
 ])}else if(expressed === "Islam"){
  var color = d3.scale.quantile() 
    .range([
      "#ffffcc",
      "#c2e699",
      "#78c679",
      "#31a354",
      "#006d2e"
  //-----------------------------------------------  Bananas     
    ])}else if(expressed === "Buddhism"){
    var color = d3.scale.quantile()
    .range([
      "#ffffb2",
      "#fecc5c",
      "#fd8d3c",
      "#f03b20",
      "#bd0026"
  //-----------------------------------------------  Blue Berries
    ])}else if(expressed === "Judaism"){
    var color = d3.scale.quantile()
    .range([
      "#f1eef6",
      "#bdc9e1",
      "#74a9cf",
      "#2b8cbe",
      "#045a8d"
  //-----------------------------------------------  Carrots
    ])}else if(expressed === "Hinduism"){
    var color = d3.scale.quantile()
    .range([
      "#eddbb7",
      "#fed98e",
      "#fe9929",
      "#d95f0e",
      "#993404"
    ])};

  var domainArray = [];
  for (var i in csvData){
      if(csvData[i][expressed] != 0){
    domainArray.push(Number(csvData[i][expressed]));
    };
  };
  color.domain(domainArray);
  
  return color; //return the color scale generator
};

function choropleth(d, colorize){
  
  //get data value
  var value = d.properties ? d.properties[expressed] : d[expressed];
  //if value exists, assign it a color; otherwise assign gray
  if (value) {
    return colorize(value); //colorize holds the colorScale generator
  } else {
    return "#ccc";
  };
};

function highlight(data){

  //json or csv properties
    var props = data.properties ? data.properties : data;
    if(props[expressed] > 0){
    d3.selectAll("."+props.name) //select the current province in the DOM
      .style("stroke", "#000")
      .style("stroke-width", "2px");

    var labelName = props.name //html string for name to go in child div

    var labelAttribute = "<h1>"+props[expressed]+"</h1> practioners of <h1>"
    + expressed +"</h1> live in <h1>"+props.name.replace(/_/g, " ")+"</h1>"; //label content
    
    //create info label div
    var infolabel = d3.select("body")
      .append("div") //create the label div
      .attr("class", "infolabel")
      .attr("id", props.id+"label") //for styling label
      .html(labelAttribute) //add text
    };
};

function dehighlight(data){
  //json or csv properties
  var props = data.properties ? data.properties : data;
  d3.selectAll("."+props.name) //designate selector variable for brevity
    .style("stroke", "none"); //reset enumeration unit to orginal color
};


function changeAttribute(attribute, csvData){
  d3.selectAll(".infolabel").remove()
  
  expressed = attribute;

  console.log(expressed)

  var labelDeclare = "Countries with the largest populations of <h1>"+expressed+"</h1>"; //label content

  var infolabel = d3.select("body")    
    .append("div")
    .attr("class", "infolabel")
    .html(labelDeclare)

  //change the expressed attribute
  colorize = colorScale(csvData);
  
  //recolor the map
  d3.selectAll(".chorocountries") //select every province
    .select("path")
    .style("fill", function(d) { //color enumeration units
      return choropleth(d, colorize); //->
    })
    .select("desc") //replace the color text in each desc element
      .text(function(d) {
        return choropleth(d, colorize); //->
      });

  //re-sort the bar chart
  var bars = d3.selectAll(".bar")
//    .sort(function(a, b){
  updateChart(bars, csvData);
};

function updateChart(bars, csvData){
  var newData = [];
  for (var i=0; i<csvData.length; i++){
    if (csvData[i][expressed] > 0){
      newData.push(csvData[i])
     };
  };
  bars.remove();

  //define maximum value per expressed
  var max = d3.max(newData, function(f){ return +f[expressed]});

  var bars = chart.selectAll(".bar")
      .data(newData)
      .enter()
      .append("rect")
      .attr("class", function(d){
        return "bar " + d.name.replace(/ /g, "_");
      })
      .on("mouseover", highlight)
      .on("mouseout", dehighlight)
      .attr("width", function(d){
          if(d[expressed] > 0){
          return ( chartWidth / newData.length - 9);
          };
        }).sort(function(a, b){ return a[expressed]-b[expressed]})
        .attr("height", function(d, i){
          var yscale = d3.scale.linear()
            .domain([0, max])
            .range([0, 80]);
    //      console.log(yscale(d[expressed]))
  //      console.log(Number(d[expressed])*3);
        return Number(yscale(d[expressed]));        
  //       return (yscale(d[expressed])) + 50;
        })
        .attr("y", function(d, i){
//          console.log(yscale(d[expressed]))
//          return yscale(d[expressed]);
          var yscale = d3.scale.linear()
            .domain([0, max])
            .range([0, 80]);
          return chartHeight - Number(yscale(d[expressed]));
        })
        .attr("x", function(d, i){
          if(d[expressed] > 0){
          return i * (chartWidth / newData.length);
          };
        })
        .style("fill", function(d){
          return choropleth(d, colorize);
        });
};


console.log(expressed)