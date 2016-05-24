---
layout: post
title:  <a href="../"><i class="fa fa-home fa"></i> /</a> Cat Map
type: maps
description: Cat Map!
bannerimg: /banners/catmapbanner
banner: ../assets/graphics/banners/banner10.jpg
links: 
date: 2015-09-22
display: 'yes'
permalink: blog/cat-map.html

---

<!--[if lte IE 8]>
<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.6.4/leaflet.ie.css" />
<![endif]-->
<style>
  #catmap {
		position: absolute;
		height: 600px;
		width: 100%;
		left: 0;
		border: solid 1px #888;
	}
  #introbox{
    width:100px;
    height:100px;
    z-index: 5;
    position: absolute;
    top: 25vh;
    left: 25vw;
  }
  .full-bleed{
  	margin: 2em 0 1em;
  	height: 600px;
  }
	#map{
		width:100%;
		height: 600px;
		position:absolute;
		left:0;
	}
	.post-content img{
		max-width: initial;
	}
</style>

<div class = "full-bleed">
  <div id = "introbox"><img src="../assets/graphics/blog/cat/intro.png"></img></div>
	<div id = "catmap"></div>
</div>
<fig>Map made to test manipulating a geojson in the browser via an interaction. Cats drawn for my own amusement.</fig>


<script>
	var howmanycats = Math.floor(Math.random()*10);
	var whatcat = Math.floor(Math.random()*10);
	var whatlat = Math.floor(Math.random()*(180)-90);
	var whatlon = Math.floor(Math.random()*(360)-180);
	var imgsrc = "../assets/graphics/blog/cat/"

	d3.select("#introbox").on("click", function(){
	  $("#introbox").fadeOut("fast");
	  amendGeojson();      
	  d3.select(".itsacat").remove();
	  makeJson(geojsonFeature);
	});

	//Leaflet Map Properties
	var map = L.map('catmap',{
	  maxZoom: 6,
	  minZoom: 2,
	  zoomControl: true
	}).setView([43.0667,-89.4000],4)
	// Set Bounds to the map by a Top-Left and Bottom-Right coordinates
	.setMaxBounds([ [90, -180],[-90, 180] ])
	;

	//Declare Tile Source
	L.tileLayer(
	  'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{
	  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community | Made by Dylan Moriarty.'
	  }).addTo(map);

	map.scrollWheelZoom.disable();

	//paste Corn.geojson here!

	//CSV Data in GeoJson form
	var geojsonFeature = {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"image":"1","latitude":"39.381018","longitude":"-89.318848"},"geometry":{"type":"Point","coordinates":[-89.4000,43.0667]}}]};

	window.onload = makeJson(geojsonFeature);

	function makeJson(geojsonFeature){
	  L.geoJson(geojsonFeature, {
	    pointToLayer: function(feature, latlng){
	        var cats = L.icon({
	          iconUrl:""+imgsrc+"cat"+feature.properties.image+".png",
	          iconSize:[75, 75],
	          iconAnchor:[38, 38],
	          className: "itsacat",
	        });
	        return L.marker(latlng, {icon: cats});
	      },
	      onEachFeature: function(feature, layer){
	        layer.on('click', function (e){
	          $(".itsacat").remove();
	          amendGeojson();
	          d3.select(".itsacat").remove();
	          makeJson(geojsonFeature);
	        });
	    }
	  }).addTo(map);
	};

	function drawMeow(feature){
	  // $(".itsacat").each(function(feature){
	  //   var offsets = $(this).offset();
	  //   var top = offsets.top;
	  //   var left = offsets.left;
	  //   console.log(top)
	  //   console.log(left)

	  //   $('<img/>')
	  //   .attr('src','img/meow.png')
	  //   .attr('class', 'meow')
	  //   .attr('top', top)
	  //   .attr('bottom', left)
	  //   .appendTo('body');

	  // });
	};

	function amendGeojson(){
	  howmanycats = String(Math.floor(Math.random()*10));

	  for(i=0; i < howmanycats; i++){
	    whatcat = String(Math.floor(Math.random()*10)+1);
	    whatlat = Math.random()*(360)-180;
	    whatlon = Math.random()*(180)-90;
	    geojsonFeature.features.push(
	      {"type":"Feature","properties":{"image":whatcat,"latitude":String(whatlat), "longitude":String(whatlon)}, "geometry":{"type":"Point","coordinates":[whatlat,whatlon]}}
	    );
	  };
	}
</script>
