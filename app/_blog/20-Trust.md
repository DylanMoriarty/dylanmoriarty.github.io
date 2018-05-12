---
layout: post
title:  ''
home: 'no'
type: maps
description: Recreating the embers of a city as seen from the sky.
bannerimg: /banners/basketweave
banner: hb-baskets.jpg
links: 
date: 2017-08-02
display: 'no'
permalink: blog/trust.html

twit-title: "Midnight Arrival"
twit-descrip: "Recreating the embers of a city as seen from the sky"
twit-image: "http://dylanmoriarty.github.io/assets/graphics/blog/fsp/cloudy.png"

---

<script src="http://d3js.org/d3.v3.min.js"></script>
<script src="http://d3js.org/topojson.v1.js"></script>
<script src="http://d3js.org/queue.v1.min.js"></script>

<style type="text/css">

body {
  font: 11px sans-serif;
}

.body {
  background-color: #b4ecff;
  position: relative;
  font-family: 'Verlag';
}

.land {
  fill: #a6ce9b;
  stroke: #9aaa93;
  stroke-width:0.5px;
}

/* Legend Position Style */
.legend {
  position:absolute;
  background-color: white;
  padding: 1rem;
  bottom: 1rem;
  right: 1rem;
  border-radius: 1rem; 
}

.roads {
  stroke-width: 2px;
  stroke: #cdcdcd;
  fill: none;
}

.cities {
}

.city-label {
  fill: #333;
  font: 10px sans-serif;
  font-family: 'Verlag';
}

.clickme {
  width: 30px;
  height: 20px;
  background-color: blue;
}

.boundary {
  stroke-width: 2px;
  stroke: #333333;
  opacity: 0.1;
  fill: none;
}

div.tooltip {   
  position: absolute;
  text-align: left;
  min-width: 60px;
  min-height: 28px;
  padding: 0.75rem 1rem;
  background: white;
  border: 0px;  
  border-radius: 8px;
  pointer-events: none;
}

.popup span {
  font-size: 0.9rem;
  font-weight: 800;
}

.popup dt {
  margin-top: 0.25rem;
  display: inline-block;
  float: left;
}

.popup dd {
  margin-top: 0.25rem;
  display: inline-block;
  float: left;
}

.currentYear {
	position: absolute;
	font-size: 2rem;
	font-weight: 800;
	z-index: 999;
	color: black;
	opacity: 1;
}

</style>
</head>
<body>

<div class="clickme">
</div>

<div class="currentYear">1998</div>


<script type="text/javascript">
//Width and height of map
var width = 800;
var height = 600;

//Colors
var water = '#98deff'

var legendText = ['Undetected / Not found', 'Reintroduced, but has yet to be established', 'Small amount detected', 'Present', 'Present, sprayed annually', 'Eradicated']
var curYear = 1998

// D3 Projection
var projection = d3.geo.mercator()
  .translate([width / 2, height / 2])
  .scale(5800)
  .center([-95.2018, 30.6686])

// Define path generator
var path = d3.geo.path()
  .projection(projection)

// Define linear scale for output
// var color = d3.scale.linear()
//         .range(["#a7efeb","blue","green","rgb(217,91,67)"]);

// var color = 


var color = d3.scale.linear()
  .range(['#b4ecff', '#f8ee95', '#efd373', '#f0a15a', '#e0532d', '#ff4eaa'])

//Create SVG element and append map to the SVG
var svg = d3.select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .attr("class", 'body')

var g = svg.append("g");

// Append Div for tooltip to SVG
var div = d3.select("body")
  .append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);

queue()
  .defer(d3.json, "./cities_new.json")
  .defer(d3.json, "./texas-roads.json")
  .defer(d3.json, "./states.json")
  .await(makeMap)

function makeMap(error, cities, roads, states) {
  if (error) throw error;

  var layer1 = svg.append('g');
  var layer2 = svg.append('g');
  var layer3 = svg.append('g');

  // state land
  layer1.append("path")
    .datum(topojson.feature(states, states.objects.collection))
    .attr("class", "land")
    .attr("d", path);

  // boundary
  layer2.append('path')
    .datum(topojson.mesh(states, states.objects.collection, function(a, b) { 
      return a !== b }))
    .attr('class', 'boundary')
    .attr('d', path);


  layer2.append("path")
    .datum(topojson.feature(roads, roads.objects.collection))
    .attr("class", "roads")
    .attr("d", path);

  layer3.selectAll('.city-label')
    .data(topojson.feature(cities, cities.objects.collection).features)
    .enter()
    .append('text')
    .attr('class', 'city-label')
    .attr("transform", function(d) { return "translate(" + projection(d.geometry.coordinates) + ")"; })
    .attr('dx', 0)
    .attr('dy', 0)
    .text(function(d) {
      return d.properties.name
    })
}

// Load in my states data!
d3.csv("spread.csv", function(data) {
  color.domain([0,1,2,3,4,5]); // setting the range of the input data

  // Load GeoJSON data and merge with states data
  d3.json("lakes.geojson", function(error, json) {
    if (error) throw error;

    for (var i = 0; i < data.length; i++) {
      var dataState = data[i].name;
      var dataValue = data[i];

      for (var j = 0; j < json.features.length; j++)  {
        var jsonState = json.features[j].properties.name;

        if (dataState == jsonState) {
          // Copy the data value into the JSON
          json.features[j].properties.status = dataValue; 
        }
      }
    }

    // Bind the data to the SVG and create one path per GeoJSON feature
    svg.selectAll("path")
      .data(json.features)
      .enter()
      .append("path")
      .attr("d", path)
      .attr('class', 'lakes')
      .style("fill", function(d) {
        var value = d.properties.status;

        return color(d.properties.status[curYear]);
      })
      .on('mouseover', function(d) {
        div.transition()
          .duration(200)
          .style("opacity", .9)

        var thisStatus = d.properties.status[curYear]
        var innerText = '<div class="popup"><span>' + d.properties.name + '</span><br><dt>status:</dt><dd>' + legendText[thisStatus] + '</dd></div>'

        div
          .html(innerText)
          .style("left", (d3.event.pageX) + "px")
          .style("top", (d3.event.pageY - 28) + "px");
      })
      .on('mouseout', function(d) {
        div.transition()
         .duration(200)
         .style("opacity", 0)
      })

    d3.select("svg").append('rect')
      .attr('fill', 'white')
      .attr('width', 260)
      .attr('height', 160)
      .attr('transform', 'translate(10, 10)')
      .attr('rx', 5)
      .attr('ry', 5)

    var legend = d3.select("svg")
      .append("svg")
        .attr("class", "legend")
        .attr("width", 260)
        .attr("height", 160)
        .selectAll("g")
        .data(color.domain().slice())
        .enter()
        .append("g")
        .attr("transform", function(d, i) {
          var transY = 30 + i * 20
          return "translate(20," + transY + ")"; 
        });

      legend.append("rect")
        .attr("width", 18)
        .attr("height", 18)
        .style("fill", color);

      legend.append("text")
        .data(legendText)
        .attr("x", 24)
        .attr("y", 9)
        .attr("dy", ".35em")
        .text(function(d) { return d; });

    // var slider = d3.select('body').append('svg')
    //   .attr('class', 'slider')
    //   .attr('width', 200)
    //   .attr('height', 50)
  });
});

d3.select('.clickme')
  .on('click', function() {

  	d3.select('.currentYear')
  		.html(curYear)

    var autoPlay = setInterval(function() {
      if(curYear > 2010) {
        curYear = 1998
        clearInterval(autoPlay)
        return
      } else {
        curYear++
        console.log(curYear)
      }


      d3.selectAll('path.lakes')
        .transition()
        .duration(200)
        .style('fill', function(d) {
          return color(d.properties.status[curYear]);
        })
      }, 1000)
  })

</script>

