---
layout: post
title:  Midnight Arrivial
home: 'yes'
type: maps
description: Midnight Arrivial – Recreating city embers
bannerimg: /banners/hb-midnight.jpg
banner: hb-midnight.jpg
links: 
date: 2017-10-19
display: 'yes'
permalink: blog/midnight-arrival.html

scripts: 'Mapbox-GL-2'

twit-title: "Midnight Arrival"
twit-descrip: "Recreating the embers of a city as seen from the sky"
twit-image: "http://dylanmoriarty.github.io/assets/graphics/blog/mar/burningmatch.gif"

---

<style>
	body {
		background-color: #000;
	}

	article	a { color: #e5c53e; }
	article	a:hover { 
			color: darken(#e5c53e, 20);
			opacity: 0.8;
	}
	article	a:active { color: darken(#e5c53e, 20); }
	article	a:visited { color: #e5c53e; }


	.page-title {
		color: #888;
	}

	p { 
		color: #888; 
	}

	.romanticism p {
		margin: 0 auto 2rem;
		line-height: 2.5rem;
	}

	.welcomeimagebox {
		display: none;
	}

	.full-bleed {
		margin: 6rem 0 0;
		height: 550px;
	}

	.mapstyle {
		width:100%;
		height: 550px;
		position:absolute;
		left:0;
	}

	.innershadow {
		box-shadow: inset 0px 0px 150px 35px #000;
		position: absolute;
		width: 100%;
		height: 550px;
		left: 0;
		z-index:999;
		pointer-events: none;
	}

	.lit-match {
		box-shadow: 0px 0px 100px 40px #090909;
	}

	.footnotes {
		border-top-color: #555;
	}

	.autopilot-toggle {
		border: 1px solid #555;
		color: #888;
		font-size: 0.9rem;
		border-radius: 10px;
		background-color: rgba(0,0,0,0);
		padding: 0.5rem 1rem;
		transition: all 0.2s;
		cursor: pointer;
		z-index: 1000;
		position: absolute;
		left: 1rem;
		bottom: 3rem;
	}

	.autopilot-toggle:hover {
		border-color: #888;
	}

	.autopilot-toggle:focus {
		outline: none;
	}

	.map-controller {
		position: relative;
		margin-bottom: 6rem;
		z-index: 1001;
	}

	.happy-auto-pilot {
		position: absolute;
		bottom: 6.5rem;
		opacity: 0;
		pointer-events: none;
		transition: all 1s;
		left: 1rem;
	}

	.autopilot-off:hover .happy-auto-pilot {
		opacity: 1;
	}

	.happy-auto-pilot img {
		width: 120px;
		border: 12px solid black;
		border-radius: 50%;
	}

	.happy-auto-pilot:after {
    content:'';
    position: absolute;
    top: 76%;
    left: 50%;
    margin-left: -50px;
    width: 0;
    height: 0;
    border-top: solid 50px black;
    border-left: solid 50px transparent;
    border-right: solid 50px transparent;
    z-index: -1;
	}

	::selection {
		background: rgba(0,0,0,0);
		color: #e5c53e;
	}

	.mapboxgl-ctrl-bottom-right {
		z-index: 1000;
	}

	.mapboxgl-ctrl.mapboxgl-ctrl-attrib {
		background-color: rgba(0,0,0,0);
	}

	.mapboxgl-ctrl-attrib a { color: #666; }
	.mapboxgl-ctrl-attrib a:hover { color: #DDB598; }
	.mapboxgl-ctrl-attrib a:visited { color: #666; }
	.mapboxgl-ctrl-attrib a:active { color: #666; }
</style>

<div class="images">
	<img src="../assets/graphics/blog/mar/burningmatch.gif" class="lit-match">
	<figcaption></figcaption>
</div>

<div class="romanticism">
	<p>There's nothing quite as enchanting as an open flame. The wispy spontaneity, the collapsing kindling, & the warmth of a good fire is inescapably captivating.</p>

	<p>I think it's recollection of fire that makes flying at night such a treat. Streetlights flicker & glow like embers. Shooting star car lights slide down invisible roads until they burn out.</p>

	<p>When I'm lucky enough to catch the midnight view of a city from on high, I'm usually half soaking the gorgeous view in, and half working on how I could possibly replicate it. This is my attempt to do so, followed by technical notes.</p>

	<p>Please enjoy some tunes to drown out the sound of the engines as you descend endlessly over Washington DC.</p>
</div>

<div class="images">
	<iframe src="https://open.spotify.com/embed/user/eatincake/playlist/5oEKxk1dXh3Nh468bQmOP5" width="300" height="80" frameborder="0" allowtransparency="true"></iframe>
</div>

<div class= "full-bleed">
	<div class="innershadow"></div>
	<div id="nightMap" class="mapstyle"></div>
</div>
<div class="map-controller">
	<div class="happy-auto-pilot">
		<img src="../assets/graphics/blog/mar/airplane_autopilot.png">
	</div>
	<button class="autopilot-toggle autopilot-off">Manual Control</button>
</div>

<div class="footnotes smaller-image">
	<p>Technical Details:</p>

	<p>This project was made possible thanks to <a href="opendata.dc.gov" target="_blank">opendata.dc.gov</a>. I've pondered for awhile how I could generate streetlight-esque patterns through manipulating road layers, so it was a pleasant surprise to find a site that just has actual streetlight data.</p>

	<p>While Mapbox does provide a building layer themselves, they force you to zoom in pretty far before it will draw. To get around this, I yoinked building data from OpenStreetMap for DC via <a href="https://overpass-turbo.eu/">Overpass-Turbo</a>, filtered the metadata in QGIS, & converted it to mbtiles with <a href="https://github.com/mapbox/tippecanoe">Tippecanoe</a>. The basemap was started from Mapbox's default Dark style, cause ain't no one got time to style all the different cases for road layers. The match GIF came from Giphy, no idea where they got it from unfortunately.</p>

	<p>I had a few prior ideas to this.</p>

	<p>In one iteration I was going to make 'fake' streetlights by using road lines but making them 'dotted'; 1 pixel dashes with 10 pixel gaps between them or so. This would allow us to get lights for the whole world, but is terribly unruly and turns into a disaster when there are nearby roads. It also adds a uniformity that no human urban planner could hope to achieve.</p>

	<p>Another was to generate millions of random points in QGIS, & then clip it to buffered roads. Never tried this because I thought a random distribution would look unrealistic as streetlights do have regions of uniformity. Also, too much work.</p>

	<p>Expanding from this, I'd really love to add some little car lights going up & down the streets. <a ref="https://mapzen.com/products/maps/tron/more-labels/#z=16.7124&lat=48.85657&lng=2.34537">Mapzen</a> has already cracked something similar to that using WebGL shaders, so hey, maybe I should just be doing this in Tanagram.</p>
	
	<p>The scripts running this seem to be computationally taxing, given every time I've let this run for awhile the fan starts rolling. It's not ideal, but it the added fan noise does make for a more authentic atmosphere.</p>

	<p>Finally, I apologize to your eyeballs for making an incredibly dark webpage on a site where otherwise every page is a very light grey. Sorry eyeballs!</p>
</div>


<!-- mb style -->
{% include scripts/midnight-style.html %}
{% include scripts/midnight-flightpath.html %}

<script>
	mapboxgl.accessToken = 'pk.eyJ1IjoiZ290LW1hcCIsImEiOiJjajVzb2htd2MxYTE5MzNvMHozeTExa3NpIn0.EjAu86Nd3hVJGhcjaxBsYQ';

	var map = new mapboxgl.Map({
    container: 'nightMap',
    style: style,
    zoom: 13,
    pitch: 45,
    bearing: 60,
    center: [-77.12232423981123, 38.938086813665784],
	});

	var placeInPath = 1
	var curZoom = 15
	var curBearing = 160
	var interval = ''
	var flying = false
	var pilotStatus = true

	map.on('load', function () {
		mapSwitch(false)

		// FLY FUNCTIONS
		map.on('flystart', function(){ flying = true; })
		map.on('flyend', function(){ flying = false; })
		map.on('moveend', function(e){
			if(flying && pilotStatus) {
		    map.fire('flyend')
		    flyTo()
		  }
		})
		flyTo()

		// LIGHTS
		autopilot()
		// flicker()
	})

	function flyTo () {
		console.log(placeInPath)

		var flyTarget = flightPath[placeInPath]
		var centerTarget = [flyTarget.lon, flyTarget.lat]

		if (flyTarget.zoom) { curZoom = flyTarget.zoom }
		if (flyTarget.bearing) { curBearing = flyTarget.bearing }

		map.flyTo({
			center: centerTarget,
			zoom: curZoom,
			bearing: curBearing,
			speed: 0.05,
			easing: function (n) {
        return n;
      }
		})
		
		placeInPath++

  	map.fire('flystart');
	}

	function autopilot() {
		var pilotToggle = document.querySelector('.autopilot-toggle')
		var controlDef = document.querySelector('.map-controller')

		pilotToggle.addEventListener('click', function() {
			var mapContainer = document.querySelector('.mapstyle')

			if (pilotStatus) {
				pilotToggle.classList.remove('autopilot-on')
				controlDef.classList.remove('autopilot-on')
				pilotToggle.classList.add('autopilot-off')				
				controlDef.classList.add('autopilot-off')

				mapSwitch(true)
				pilotToggle.innerHTML = 'Turn on Autopilot'
				pilotStatus = false

				console.log("this plane is out of control!")
			} else {

				pilotToggle.classList.remove('autopilot-off')
				controlDef.classList.remove('autopilot-off')
				pilotToggle.classList.add('autopilot-on')
				controlDef.classList.add('autopilot-on')

				mapSwitch(false)
				pilotStatus = true
				flyTo()
				pilotToggle.innerHTML = 'Manual Control'

				console.log("oh thank goodness")
			}
		})

		// brandon-grotesque
		// document.querySelector('.autopilot-toggle').on('click', ()=> {
		// 	console.log('yay')
		// })
	}

	function mapSwitch(value) {
		if(value) {
				map.scrollZoom.enable()
				map.dragPan.enable()
				map.boxZoom.enable()
				map.dragRotate.enable()
				map.keyboard.enable()
				map.doubleClickZoom.enable()
				map.touchZoomRotate.enable({ around: 'center' })

				console.log(map)
				console.log('turn map on')
		} else {
				map.scrollZoom.disable()
				map.dragPan.disable()
				map.boxZoom.disable()
				map.dragRotate.disable()
				map.keyboard.disable()
				map.doubleClickZoom.disable()
				map.touchZoomRotate.disable({ around: 'center' })

				console.log(map)
				console.log('turn map off off')
		}
	}

	function flicker () {
		// let max = 35000;
		// let r1 = randombetween(1, max-3);
		// let r2 = randombetween(1, max-2-r1);
		// let r3 = randombetween(1, max-1-r1-r2);
		// let r4 = max - r1 - r2 - r3;


		// function randombetween(min, max) {
		//   return Math.floor(Math.random()*(max-min+1)+min);
		// }



 	// 	}
		// setInterval(function() {
			// radiusStops = [70000]
			// radiusValues = []

			// for (var i = 6; i >= 0; i--) { radiusStops.push(Math.floor(60000 * Math.random())) }

			// radiusStops.sort((a, b) => a - b)

			// radiusStops.forEach((n) => {
			// 	radiusValues.push(
			//       [
			//         n,
			//         (n === 70000 ? 1 : Math.floor(Math.random() * 100) * 0.01 + 5)
			//       ]
			// 		)
			// })

			// console.log(radiusStops)

			// let newRadius = {
	  //     "base": 1,
	  //     "type": "exponential",
	  //     "property": "id",
	  //     "stops": radiusValues
	  //   }

	  //   console.log(map.getPaintProperty('streetlights', 'circle-radius'))
   //    map.setPaintProperty('streetlights-glow-large', 'circle-radius', newRadius)
			// }, 4000)
		// }
	}
</script>

