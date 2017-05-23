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

  .mapboxgl-popup-anchor-top .mapboxgl-popup-tip {
  	border-bottom-color: #ececec;
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

Instead of throwing millions of $ at the problem, OSM instead throws millions of volunteers. With some exceptions, all OSM data has been added by volunteers mapping their world. Much like Wikipedia anyone can add information.

<div class= "full-bleed">
	<div id="map-buildings" class="mapstyle"></div>
</div>
<figcaption>Hover over the buildings to see how people have labeled each buildings type & name. You may notice a lot of <em>Building: Yes</em>. I'd love to say that's a Yoko-Ono inspired hurrah for masonry, but it's just the default type assigned to a building if one's not defined or unknown.</figcaption>

<br>

Above is the building data from Madison, Wisconsin. You might notice as you zoom out it tapers it out in the upper right hand side once you get away from the downtown.

Much like the neglected basketweavers of the world, no one's quite gotten around to adding in those residential buildings quite yet. Mapping the world is an insurmountable task, so most mappers have understandably prioritized adding buildings such as hospitals, schools, and other major buildings before large residential blocks.

Particularly in major cities, the map is incredibly detailed.

<div class= "full-bleed">
	<div id="map-eur" class="mapstyle"></div>
</div>
<figcaption>Guess the city! OSM began in Europe, so the cities there are some of the best mapped out.</figcaption>

<br>

{% include bits/chapters.html chapter='II' title='So how is this Reliable?'%}

For the reasons mentioned above, every map made with OSM data should have a caveat: _There's almost certainly missing bits here._

That said, because anyone can edit it, it's constantly being improved.

For example, here's an interactive that shows for any given point in DC where the nearest bar is.

<div class= "full-bleed">
	<div id="map-bars" class="mapstyle"></div>
</div>
<figcaption>Hover over the map to view a voronoi highlight of which areas are closest to each bar. <em>There's almost certainly missing bits here.</em></figcaption>

<br>

I'm sure someone native to DC will notice their favorite bar missing. But, there's nothing stopping them from making an account on OSM and adding it to the database!

This kind of map can be made to fetch live data too- so an individual adding a feature labeled `bar` to DC would immediately update it. That's powerful. 

But if anyone can update the data, how do we make sure it's valid & accurate?

{% include bits/chapters.html chapter='III' title='Pokemon & Valid Geodata'%}

In many ways, OSM has protection through obscurity. It's less visible than Wikipedia, and the notion of adding features to a map sounds significantly more difficult than just editing text. Most interactions we make online are editing text fields after all.

In mid 2016, Nintantic released PokemonGO and brought with it a flood of folks adding made up features to the database. PokemonGO is a game that uses THE WORLD as it's base, and has changes what critters you encounter based on what natural features you're around. If you're near a lake you'll run into water Pokemon. If you're in a field, you'll find bird Pokemon, and so on. It encourages folks to leave their house and go to parks, rivers, and such to find all these critters.

At some point someone discovered PokemonGO was referencing OSM data when it determined which natural features it's players were around. For some folks, this was great to know because their hometown hadn't been well mapped out:

> I just signed up on OSM and made some edits to my very small hometown which had nothing ever added to it before. I added the park, the baseball field, landmark names. Also made some edits near where I work (added an area as industrial which wasn't labeled before).
>
>[- reddit person AlphaRocker](https://www.reddit.com/r/TheSilphRoad/comments/5px80u/made_4_new_nests_appear_with_osm/dcuvfnr/)

Others took advantage of this and created 'nests' of fake features surrounding their home. Folks also started adding features that were in the game to the map like item spawn points that don't exist in our actual world.

[[image]]

Luckily, OSM is widely used enough that there are people who run checks over the database to identify bad contributions. After a comb is run through the entire database, these checks flag potential bugs, and then someone either removes or reconciles the issue.

One basic example is a check that makes sure there aren't polygons that self-intersect.

For PokemonGO, checks were created that filtered for things like:

- Is the word 'Pokemon' used in the contribution anywhere?
- Is this contribution full of questionably overlapping features?
- Is this contribution made by someone who just joined, with less than 5 edits, and mapping major features like lakes?

The same goes for the rest of the database broadly speaking.

{% include bits/chapters.html chapter='IV' title='Basketweavers Unite'%}

So, it's incomplete, but it's _fucking awesome._ And it's in a state of constant improvement.

& hey, if you know any basketweavers, you should add them so I and endless others after will have ever so slightly more accurate maps.

{% include bits/tooltips.html face="asdf" longtext="asdf" %}.

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

	function europeMap() {
		var eurMap = new mapboxgl.Map({
		    container: 'map-eur',
		    style: 'mapbox://styles/mapbox/streets-v9',
		    zoom: 17,
		    center: [-0.1278, 51.5085]
		});
		eurMap.scrollZoom.disable();
		eurMap.addControl(new mapboxgl.Navigation({position: 'top-left'}));
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
			      var popupContent = '<div class="tooltip-text"> ' + beeer + ' <span class="bold"> ' + features[0].properties.name + '</span> ' + beeer + '</div>';

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
	}

	roadMap()
	madBuilding()
	europeMap()
	barMap()
</script>
