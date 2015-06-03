//Draw Leaflet Map
    var map = L.map('map',{
      maxZoom: 10,
      minZoom: 6,
      zoomControl: false
    }).setView([42.68,-89.01],6)
    .setMaxBounds([ [48.011975, -100.942383],[30.552800, -68.291016] ])
    ;

  L.tileLayer(
  'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
  }).addTo(map);

//Bring in D3 code, for points.

var width = 1000;
var height = 600;
var svg = d3.select(map.getPanes().overlayPane).append("svg"),
    g = svg.append("g").attr("class", "leaflet-zoom-hide");


window.onload = initialize();

function initialize(){
  setMap();
};

function setMap(){


  queue()
    .defer(d3.json, "data/usa.topojson")
    .defer(d3.csv, "data/dummy.csv")
    .await(ready);   
};


function ready(error, usa, farms){

  //Adapt Leaflet's API to fit D3
  function projectPoint(x, y) {
    var point = map.latLngToLayerPoint(new L.LatLng(y, x));
    this.stream.point(point.x, point.y);
  }

  var transform = d3.geo.transform({point: projectPoint}),
      path = d3.geo.path().projection(transform);

  var feature = g.selectAll("path")
      .data(usa.objects.states)
      .enter()
      .append("path");

  feature.attr("d", path);



  // var projection = d3.geo.mercator()
  //     .scale((width + 1) / 2 / Math.PI)
  //     .translate([width / 2, height / 2])
  //     .precision(.1);

  // var path = d3.geo.path()
  //   .projection(projection);

  // var svg = d3.select("map").append("svg")
  //   .attr("width", width)
  //   .attr("height", height)
      
  //   svg.append("path")
  //       .datum(topojson.feature(usa, usa.objects.states))
  //       .attr("class", "states")
  //       .attr("d", path);   

  //   var positions = [];

    // Grab Farm Data //

    //     farms = farms.filter(function(d){
    //       if (d.count = farms.length){
    //         d[0] = +d.longitude;
    //         d[1] = +d.latitude;
    //         var position = projection(d);
    //         d.x = position[0];
    //         d.y = position[1];
    //         return true;
    //       };
    //     });

    // var farms = svg.append("g")
    //      .attr("class", "farms")
    //      .selectAll("g")
    //      .data(farms)
    //      .enter()
    //      .append("g")
    //      .attr("class", "farms")

    //     farms.append("circle")
    //       .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
    //       .attr("r", 2.5);

};

new L.Control.Zoom({ position: 'topright'}).addTo(map);

var ParkIcon = L.Icon.extend({
    options: {
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [18, 28]
    }
});