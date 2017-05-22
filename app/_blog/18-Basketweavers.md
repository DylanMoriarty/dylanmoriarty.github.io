---
layout: post
title:  Basketweavers & Open Data
home: 'yes'
type: maps
description: Basketweavers & Open Data
bannerimg: /banners/foggybanner
banner: hb-foggy.jpg
links: 
date: 2017-05-18
display: 'no'
permalink: blog/basketweavers-and-osm.html

scripts: 'ai2html Mapbox-GL'

twit-title: "Foggy Spaces"
twit-descrip: "Mental maps of youth & places once called home"
twit-image: "http://dylanmoriarty.github.io/assets/graphics/blog/fsp/cloudy.png"

---

Here's a map of all the basketweavers in the world:

<div class="images">
	{% include svgs/bwo/basketweavers.html %}
</div>

Or, well, that's all of the basketmakers in the world... according to data from OpenStreetMap.

Which seems off, right? It's reasonable to assume there's at least one Aussie out there crafting baskets. Obviously this means OpenStreetMap (_referred to as 'OSM' from here on out_) is an unreliable data source and no one should ever use it.

Yet thousands of applications rely on data from it! From Uber navigating millions around dense cities, to Doctors without Borders deciding where to allocate resources, to etc etc etc

Why are so many organizations using a source that's clearly flawed?

{% include bits/chapters.html chapter='I' title='OpenStreetWat'%}

Well, for many places in the world, it's surprisingly complete where it counts. For example, when it comes to road networks it has some of the best publicly available data.

<style>
	.full-bleed{
		margin:2rem 0rem 1rem;
		height: 450px;
	}

	.mapstyle {
		width:100%;
		height: 450px;
		position:absolute;
		left:0;
		border: solid 1px #888;		
	}

  .mapboxgl-popup {
    max-width: 400px;
    font: 12px/20px 'Maven Pro', Helvetica, sans-serif;
    font-weight: 400;
  }

  .mapboxgl-popup-content {
		box-shadow: 0 0px 10px 2px rgba(0,0,0,0.75);
    background: #ececec;
  }

  .mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip {
  	border-top-color: #ececec;
  }

  .tooltip-text {
  	margin: 0 0.25rem;
  }

	.tooltip-text p {
  	font-size: 0.8rem;  		
  	margin: 0;
	}

	#map-bars .mapboxgl-popup {
		padding-bottom: 0.5rem;
	}
</style>

<div class= "full-bleed">
	<div id="map-roads" class="mapstyle"></div>
</div>
<figcaption>Here are all major US roads. The above map excludes tertiary & service roads, as well as footpaths, trails etc. but you get the idea.</figcaption>

<br>

This makes OSM special. You can find other sources that have global coverage, are detailed, or are free to use, but only OSM offers it all. Which is by design!

Gathering geospatial data is an expensive endeavor. Most organizations dedicated to creating it were either narrowly focused (creating a dataset of a cities parks), compiling it to sell, or were just large enough to eat the sunk cost.

Instead of throwing millions of dollars at the problem, thanks to the internet OSM instead throws millions of volunteers. With some exceptions, most of the data has been added by volunteers mapping their world.

<div class= "full-bleed">
	<div id="map-buildings" class="mapstyle"></div>
</div>
<figcaption>Hover over the buildings to see how people have labeled each buildings type & name. You may notice a lot of <em>Building: Yes</em>. I'd love to say that's a Yoko-Ono inspired hurrah for masonry, but it's just the default type assigned to a building if one's not defined or unknown.</figcaption>

<br>

Above is the building data from Madison, Wisconsin. You might notice as you zoom out it tapers it out in the upper right hand side once you get away from the downtown. This is just another gap in the database.

Much like the neglected basketweavers of the world, no one's quite gotten around to adding in those residential buildings quite yet. Mapping the world is an insurmountable task, so most mappers have understandably prioritized adding buildings such as hospitals, schools, and other major buildings before large residential blocks.

Still we can do some fun thing with the data that is there. Like say, make an interactive map that shows where the nearest bar is to any given location in the DC area.

<div class= "full-bleed">
	<div id="map-bars" class="mapstyle"></div>
</div>
<figcaption></figcaption>

<br>


{% include bits/chapters.html chapter='II' title='So how is this Reliable?'%}


CHAPTER III - how is it safe

Well, Pokemon

CHAPTER IV --- 

You can add data too!

learn to map~
































{% include bits/chapters.html chapter='I' title='The Building Blocks (Points)'%}

Generally speaking, Europe is the best mapped area in the world. This is largely due to Britian being the birthplace of the whole project, and a large group of blah blah blah


{% include bits/chapters.html chapter='II' title='The Missing Bits'%}

There's a reason when you see 3d maps it's almost _always_ San Fran or New York. They're incredibly well mapped out and have data inside for everything from water fountains to building heights!

<div class="images">
</div>

Other parts of the world that lack the volume of people are significantly less represented. If your hometown is under 20,000 people, chance is good large sections of your town haven't been mapped out. Even where there's a polygon for the buildling we can still see disparity of coverage looking at city malls,

<div class="images">
</div>

The best thing about OpenStreetMap though? It's a {% include bits/tooltips.html face="Wiki-esque" longtext="I take pride that I made it this far without calling OSM a Wiki version of Google Maps" %}. database that anyone can edit!

There are a few people out there who get paid to contribute and maintain the quality of OpenStreetMap, but not quite enough to map everything. Have some time to spare?

<div class="images">
</div>
<figcaption>Learn to Map & add your local basketweaver to the world!</figcaption>




For places in the world 

[ HOT efforts ]



<script>
	mapboxgl.accessToken = 'pk.eyJ1IjoiZG1vcmlhcnR5IiwiYSI6Ikd3T29EOWMifQ.-DKJ4ernht84AZmc6Bk51Q';

	function roadMap() {
		var roadMap = new mapboxgl.Map({
		    container: 'map-roads',
		    style: 'mapbox://styles/dmoriarty/cj2l8lmda000o2sps2hgcemj8',
		    zoom: 2.5,
		    center: [0, 0]
		});
		roadMap.scrollZoom.disable();
		roadMap.addControl(new mapboxgl.Navigation({position: 'top-left'}));
	}

	function madBuilding() {
		var map = new mapboxgl.Map({
		    container: 'map-buildings',
		    style: 'mapbox://styles/dmoriarty/cj2l8lmda000o2sps2hgcemj8',
		    zoom: 13,
		    minZoom: 10,
		    center: [-89.4, 43.075]
		}); 
		map.scrollZoom.disable();
		map.addControl(new mapboxgl.Navigation({position: 'top-left'}));

    // Create a popup, but don't add it to the map yet.
    var popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });

    map.on('mousemove', function(e) {
      var features = map.queryRenderedFeatures(e.point, { layers: ['madison-buildingsgeojson'] });
      // Change the cursor style as a UI indicator.
      map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';

      if (!features.length) {
        popup.remove();
        return;
      }

      var feature = features[0];
      var buildingType = '<p>Building Type: <span class="bold">' + feature.properties.building + '</span></p>'
      var buildingName = ''

    	if (feature.properties.name) {
    		buildingName = '<p>Name: <span class="bold">' + feature.properties.name + '</span></p>'
    	}

      var popupContent = '<div class="tooltip-text">' + buildingName + buildingType + '</div>';

      popup.setLngLat(e.lngLat)
        .setHTML(popupContent)
        .addTo(map);
    });
	}

	function barMap() {
		var barMap = new mapboxgl.Map({
	    container: 'map-bars',
	    style: 'mapbox://styles/dmoriarty/cj2y2q82u000n2rp8919e27nk',
	    zoom: 12,
	    center: [-77.013, 38.898]
		});
		barMap.scrollZoom.disable();
		barMap.addControl(new mapboxgl.Navigation({position: 'top-left'}));

    var popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });

		var hoverSource = 'composite:hover'

		function onStyleLoad (e) {
			var style = barMap.getStyle()
			if (style.sources && style.sources.composite) {
				barMap.addSource(hoverSource, Object.assign({}, style.sources.composite))
				barMap.off('style.load', onStyleLoad)
			}
		}

		function onSourceLoad (e) {
			if (e.source.id === hoverSource) {
				var style = barMap.getStyle()
				var hover = style.layers.find(function (d) {
					return d.id === 'selection'
				})
				hover.source = 'composite:hover'
				barMap.setStyle(style)

				barMap.on('mousemove', function (e) {
			    if (barMap.getLayoutProperty('selection', 'visibility') === 'none') {
			      barMap.setLayoutProperty('selection', 'visibility', 'visible')
			    }

	        var features = barMap.queryRenderedFeatures(e.point, { layers: ['interactive'] });
	        if (features.length) {
						barMap.setFilter('selection', ['==', 'name', features[0].properties.name])

						var beeer = String.fromCharCode(0xD83C, 0xDF7A)
			      var popupContent = '<div class="tooltip-text"> ' + beeer + ' <span class="bold">' + features[0].properties.name + '</span> ' + beeer + '</div>';

			      popup.setLngLat(e.lngLat)
			        .setHTML(popupContent)
			        .addTo(barMap);
	        } else {
						popup.remove()	        	
						barMap.setFilter('selection', ['==', 'name', ''])
	        }
	      });

	      barMap.on('mouseout', function() {
	        barMap.setFilter('selection', ['==', 'name', '']);
	      });

	      barMap.off('source.load', onSourceLoad);
			}
		}

	  barMap.on('style.load', onStyleLoad);
	  barMap.on('source.load', onSourceLoad);



    // THIS ALL WORKS BELOWWW
    // var popup = new mapboxgl.Popup({
    //     closeButton: false,
    //     closeOnClick: false
    // });

    // barMap.on('mousemove', function(e) {
    //   var features = barMap.queryRenderedFeatures(e.point, { layers: ['interactive'] });
    //   // Change the cursor style as a UI indicator.
    //   barMap.getCanvas().style.cursor = (features.length) ? 'pointer' : '';

    //   // empty
    //   if (!features.length) {
    //     popup.remove();
    //     return;
    //   } else {
	   //    var feature = features[0];
	   //    var thisId = feature.properties['name']

	   //    if (barMap.getLayoutProperty('selection', 'visibility') === 'none') {
		  //     barMap.setLayoutProperty('selection-outline', 'visibility', 'visible')
		  //     barMap.setLayoutProperty('selection', 'visibility', 'visible')
	   //    }

	   //    barMap.setFilter('selection-outline', ['==', 'name', thisId])
	   //    barMap.setFilter('selection', ['==', 'name', thisId])

    //   }
    // });
	}

	roadMap()
	madBuilding()
	barMap()
</script>

<div class="images">
	<img src="../assets/graphics/blog/fsp/fullthing.jpg">
	<figcaption><a href="https://www.youtube.com/watch?v=TGofoH9RDEA" target="_blank">This is not my beautiful house!</a></figcaption>
</div>


{% include bits/tooltips.html face="" longtext="" %}.