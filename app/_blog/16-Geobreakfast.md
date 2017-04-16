---
layout: post
title:  Geobreakfast
home: 'yes'
type: maps
description: Geobreakfast - Pancakes & Projections
bannerimg: /banners/header-breakfast
banner: hb-geob.jpg
links: 
date: 2017-03-20
display: 'yes'
permalink: blog/geobreakfast.html

scripts: 'Mapbox-GL MyHand'

---

<div class= "full-bleed">
	<div id="map"></div>
</div>
<fig>If you've ever wondered what DC would look like as a cast iron skillet cooking pancakes and eggs, <i>I got you</i></fig>

<br>

Everyone loves an excuse to grab breakfast in the morning. Like DC, San Fransisco & New York have a large geography community, & among the many meetups there's a popular one called {% include bits/tooltips.html face="Geobreakfast" longtext="They have a [twitter account](https://twitter.com/geobreakfast?lang=en){:target='_blank'} and everything." %}. Myself and some folks from USAID have been leading the charge to make it a thing out in DC as well.

We originally just did little call outs on twitter saying 'hey! come join us', but that proved to be a pretty poor way to let people know what was up. Some people forgot, or just simply missed the announcement. We talked about making an official meetup site for it, but we all liked this being a little more insular & small.

So, while on vacation in Wisconsin I put together a quick lil' site:

<div class="images">
	<a href="https://geobreakfastdc.github.io/" target="_blank">
		<img src="../assets/graphics/blog/gbr/geobreakfast.jpg">
		<fig>Check it out! If you're in DC, sign up!</fig>
	</a>
</div>

This gives folks a good place to go to check if we're hanging out, and provides a quick means for people to sign up to be directly notified when we're doing the next one.

<style>
	.full-bleed{
		margin:2em 0 1em;
		height: 450px;
	}

	#map{
		width:100%;
		height: 450px;
		position:absolute;
		left:0;
		border: solid 1px #888;
	}
</style>

<script>
	mapboxgl.accessToken = 'pk.eyJ1IjoibWFwdGltZWRjIiwiYSI6ImNqMGJjYTBmdzAyeWIyd3JyMjFrcG9udGQifQ.YyGehvpe0E1DzjSWi2TeDQ';
	var map = new mapboxgl.Map({
	    container: 'map',
	    style: 'mapbox://styles/maptimedc/cj0to2bhs00842rqrb370qzgd',
	    zoom: 13.5,
	    center: [-77.011, 38.889]
	});
	map.scrollZoom.disable();
	map.addControl(new mapboxgl.Navigation({position: 'top-left'})); 
</script>

Happy eatin'!
