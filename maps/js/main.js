/*********************************************************
G575 D3 Lab
**********************************************************/

//Global Variables
var keyArray = ["Null", "Almonds", "Apples","Bananas","Blue Berries","Carrots", "Cherries", "Grapes", "Lemons", "Onions", "Potatoes", "Spinach", "Sugar Cane"];
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
  .defer(d3.csv, "data/foodbymt.csv")
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
  //-----------------------------------------------   Almonds  
    var AlmondC = d3.selectAll("#almonds")
      .style("fill-opacity", 0)
      .attr("cx", function(d, i) { return i * 100 + 50; })
      .on("mouseover", function(){
        d3.select(this).style("stroke", "#d22323").style("stroke-width", 2 ).style("stroke-dasharray", "5,5");
      }).on("mouseout", function(){
        d3.select(this).style("stroke", "none").style("stroke-width", 0)
      }).on("click", function(){
          changeAttribute(keyArray[1], csvData); 
      });
  //-----------------------------------------------   Apples 
    var AppleC = d3.selectAll("#apples")
      .style("fill-opacity", 0)
      .attr("cx", function(d, i) { return i * 100 + 120; })
      .on("mouseover", function(){
        d3.select(this).style("stroke", "#d22323").style("stroke-width", 2 ).style("stroke-dasharray", "5,5");
      }).on("mouseout", function(){
        d3.select(this).style("stroke", "none").style("stroke-width", 0)
      }).on("click", function(){
          changeAttribute(keyArray[2], csvData); 
      });
  //-----------------------------------------------    Bananas
    var BananaC = d3.selectAll("#bananas")
      .style("fill-opacity", 0)
      .attr("cx", function(d, i) { return i * 100 + 190; })
      .on("mouseover", function(){
        d3.select(this).style("stroke", "#c98b00").style("stroke-width", 2 ).style("stroke-dasharray", "5,5");
      }).on("mouseout", function(){
        d3.select(this).style("stroke", "none").style("stroke-width", 0)
      }).on("click", function(){
          changeAttribute(keyArray[3], csvData); 
      });
  //-----------------------------------------------    Blue Berry
    var BlueC = d3.selectAll("#blueberry")
      .style("fill-opacity", 0)
      .attr("cx", function(d, i) { return i * 100 + 260; })
      .on("mouseover", function(){
        d3.select(this).style("stroke", "blue").style("stroke-width", 2 ).style("stroke-dasharray", "5,5");
      }).on("mouseout", function(){
        d3.select(this).style("stroke", "none").style("stroke-width", 0)
      }).on("click", function(){
          changeAttribute(keyArray[4], csvData); 
      });
  //-----------------------------------------------    Carrots
    var CarrotC = d3.selectAll("#carrots")
      .style("fill-opacity", 0)
      .attr("cx", function(d, i) { return i * 100 + 330; })
      .on("mouseover", function(){
        d3.select(this).style("stroke", "#d95f0e").style("stroke-width", 2 ).style("stroke-dasharray", "5,5");
      }).on("mouseout", function(){
        d3.select(this).style("stroke", "none").style("stroke-width", 0)
      }).on("click", function(){
          changeAttribute(keyArray[5], csvData); 
      });
  //-----------------------------------------------    Cherries
    var CherryC = d3.selectAll("#cherries")
      .style("fill-opacity", 0)
      .attr("cx", function(d, i) { return i * 100 + 400; })
      .on("mouseover", function(){
        d3.select(this).style("stroke", "red").style("stroke-width", 2 ).style("stroke-dasharray", "5,5");
      }).on("mouseout", function(){
        d3.select(this).style("stroke", "none").style("stroke-width", 0)
      }).on("click", function(){
          changeAttribute(keyArray[6], csvData); 
      });
  //-----------------------------------------------    Grapes
    var GrapeC = d3.selectAll("#grapes")
      .style("fill-opacity", 0)
      .attr("cx", function(d, i) { return i * 100 + 470; })
      .on("mouseover", function(){
        d3.select(this).style("stroke", "#31a354").style("stroke-width", 2 ).style("stroke-dasharray", "5,5");
      }).on("mouseout", function(){
        d3.select(this).style("stroke", "none").style("stroke-width", 0)
      }).on("click", function(){
          changeAttribute(keyArray[7], csvData); 
      });
  //-----------------------------------------------    Lemons
    var LemonsC = d3.selectAll("#lemons")
      .style("fill-opacity", 0)
      .attr("cx", function(d, i) { return i * 100 + 540; })
      .on("mouseover", function(){
        d3.select(this).style("stroke", "#b0a71e").style("stroke-width", 2 ).style("stroke-dasharray", "5,5");
      }).on("mouseout", function(){
        d3.select(this).style("stroke", "none").style("stroke-width", 0)
      }).on("click", function(){
          changeAttribute(keyArray[8], csvData); 
      });
  //-----------------------------------------------    Onions
    var OnionC = d3.selectAll("#onions")
      .style("fill-opacity", 0)
      .attr("cx", function(d, i) { return i * 100 + 610; })
      .on("mouseover", function(){
        d3.select(this).style("stroke", "#666").style("stroke-width", 2 ).style("stroke-dasharray", "5,5");
      }).on("mouseout", function(){
        d3.select(this).style("stroke", "none").style("stroke-width", 0)
      }).on("click", function(){
          changeAttribute(keyArray[9], csvData); 
      });
  //-----------------------------------------------    Potatoes
    var PotatoC = d3.selectAll("#potatoes")
      .style("fill-opacity", 0)
      .attr("cx", function(d, i) { return i * 100 + 680; })
      .on("mouseover", function(){
        d3.select(this).style("stroke", "brown").style("stroke-width", 2 ).style("stroke-dasharray", "5,5");
      }).on("mouseout", function(){
        d3.select(this).style("stroke", "none").style("stroke-width", 0)
      }).on("click", function(){
          changeAttribute(keyArray[10], csvData); 
      });
  //-----------------------------------------------    Spinach
    var SpinachC = d3.selectAll("#spinach")
      .style("fill-opacity", 0)
      .attr("cx", function(d, i) { return i * 100 + 750; })
      .on("mouseover", function(){
        d3.select(this).style("stroke", "green").style("stroke-width", 2 ).style("stroke-dasharray", "5,5");
      }).on("mouseout", function(){
        d3.select(this).style("stroke", "none").style("stroke-width", 0)
      }).on("click", function(){
          changeAttribute(keyArray[11], csvData); 
      });
  //-----------------------------------------------    Sugar Cane
    var SugarC = d3.selectAll("#sugarcane")
      .style("fill-opacity", 0)
      .attr("cx", function(d, i) { return i * 100 + 820; })
      .on("mouseover", function(){
        d3.select(this).style("stroke", "#444").style("stroke-width", 2 ).style("stroke-dasharray", "5,5");
      }).on("mouseout", function(){
        d3.select(this).style("stroke", "none").style("stroke-width", 0)
      }).on("click", function(){
          changeAttribute(keyArray[12], csvData); 
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
  if(expressed === "Apples"){
  var color = d3.scale.quantile() 
    .range([
      "#ffcfcf",
      "#ff7c7c",
      "#d22323",
      "#851212",
      "#4b0909"
  //-----------------------------------------------  Null
    ])}else if(expressed === "Null"){
    var color = d3.scale.quantile()
    .range([
      "#BFBFBF"
 //-----------------------------------------------  Almonds
 ])}else if(expressed === "Almonds"){
  var color = d3.scale.quantile() 
    .range([
      "#dfdeae",
      "#cbbc95",
      "#c0a062",
      "#851212",
      "#4b0909"
  //-----------------------------------------------  Bananas     
    ])}else if(expressed === "Bananas"){
    var color = d3.scale.quantile()
    .range([
      "#eff29a",
      "#e6eb54",
      "#e6bd3c",
      "#c98b00",
      "#6b4700"
  //-----------------------------------------------  Blue Berries
    ])}else if(expressed === "Blue Berries"){
    var color = d3.scale.quantile()
    .range([
      "#f1eef6",
      "#bdc9e1",
      "#74a9cf",
      "#2b8cbe",
      "#045a8d"
  //-----------------------------------------------  Carrots
    ])}else if(expressed === "Carrots"){
    var color = d3.scale.quantile()
    .range([
      "#eddbb7",
      "#fed98e",
      "#fe9929",
      "#d95f0e",
      "#993404"
 //-----------------------------------------------  Cherries
    ])}else if(expressed === "Cherries"){
    var color = d3.scale.quantile()
    .range([
      "#ffffb2",
      "#fecc5c",
      "#fd8d3c",
      "#f03b20",
      "#bd0026"
 //-----------------------------------------------  Grapes
    ])}else if(expressed === "Grapes"){
    var color = d3.scale.quantile()
    .range([
      "#ffffcc",
      "#c2e699",
      "#78c679",
      "#31a354",
      "#006d2e"
  //-----------------------------------------------  Lemons
    ])}else if(expressed === "Lemons"){
    var color = d3.scale.quantile()
    .range([
      "#f9f4a7",
      "#f8ef71",
      "#e6db3c",
      "#b0a71e",
      "#8d8400"
 //-----------------------------------------------  Onions
    ])}else if(expressed === "Onions"){
    var color = d3.scale.quantile()
    .range([
      "#ebc99e",
      "#d2a66c",
      "#987a54",
      "#827462",
      "#605445" 
 //-----------------------------------------------  Potatoes
    ])}else if(expressed === "Potatoes"){
    var color = d3.scale.quantile()
    .range([
      "#f4d8c1",
      "#d9a173",
      "#965a29",
      "#5c3719",
      "#3e230e" 
 //-----------------------------------------------  Spinach
    ])}else if(expressed === "Spinach"){
    var color = d3.scale.quantile()
    .range([
      "#edf8fb",
      "#b2e2e2",
      "#66c25f",
      "#2ca25f",
      "#006d2c"
  //-----------------------------------------------  Sugar Cane
    ])}else if(expressed === "Sugar Cane"){
    var color = d3.scale.quantile()
    .range([
      "#e1eac8",
      "#c9cebc",
      "#a29f80",
      "#796c50",
      "#594b2f"
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

    var labelAttribute = "<h1>"+props[expressed]+"</h1> metric tons of <h1>"
    + expressed +"</h1> are produced in <h1>"+props.name.replace(/_/g, " ")+"</h1>"; //label content
    
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
  d3.selectAll(".infolabel")
    .remove()
  
  expressed = attribute;

  console.log(expressed)

  var labelDeclare = "Top Twenty Countries that produce <h1>"+expressed+"</h1>"; //label content

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