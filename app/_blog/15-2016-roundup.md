---
layout: post
title:  '2016 Roundup'
home: 'yes'
type: maps
description: 2016 Round Up - WaPo map data, logo for NASA, Humanitarian Mapping & more!
bannerimg: /banners/review-banner
banner: hb-2016.jpg
links: <!-- <a href="http://www.missingmaps.org/" target="_blank"> Check out the site</a> | <a href="https://github.com/missingmaps" target="_blank"><i class="collecticons collecticons-github"></i> Github code</a>  -->
date: 2017-1-10
display: 'yes'
permalink: blog/2016-in-review.html
pinned: true

---

2016 was pretty incredible. I got to work on the Washington Post's Election Maps, made a logo for NASA, & dived further into deep waters of the open source humanitarian mapping community.

From July-October I kept a <a href="https://dylanmoriarty.github.io/anno/" target="_blank">digital scrapbook</a> where you can see a lot of the sketches & in-progress work leading up to the following projects.

{% include bits/chapters.html chapter='I' title="Mappin' at Development Seed"%}

<div>
	<a href="https://www.washingtonpost.com/2016-election-results/us-presidential-race" target="_blank">
		<div class="images"><img src="../assets/graphics/blog/six/wapo.jpg">
			<figcaption>Check it out!</figcaption>
		</div>
	</a>
</div>

Devseed worked with the Washington Post to build out maps & the data pipeline for their 2016 election results maps. We built out the tools that took in data being constantly delivered from the Associated Press, digested that data, and piped them into the front facing maps.

My contribution to the project mostly revolved around the map itself- finding & cleaning up the geographic files, consulting on the map design, & translating the mockup styles into functional Mapbox GL JS. I also took some time to experiment with adding roads to the map, though we dropped it from the final version in favor of _ever so slightly_ faster maps.

For this project we needed to create projected shapefiles that would work in Mapbox GL JS, which only supports files in Mercator. We not only built out a tool to do that, but also released it for anyone to use & built out a fun wrapper website to show it off called "Dirty Reprojectors". You can read about the code on the <a href="https://developmentseed.org/blog/2016/12/15/dirty-reprojectors/" target="_blank">Devseed blog</a>!

<div>
	<a href="https://devseed.com/dirty-reprojectors-app/" target="_blank">
		<div class="images"><img src="../assets/graphics/blog/six/projection-examples.gif" />
			<figcaption>Front facing for Dirty Reprojectors, designed by moi.</figcaption>
		</div>
	</a>
</div>

<a href="http://www.missingmaps.org/" target="_blank">Missing Maps</a> was also officially launched at the start of the year! This joint venture with the Red Cross & the Humanitarian OpenStreetMap Team was the first major project I led design on, and it's been really neat to see it thrive since. I've written a bunch about it's development <a href="https://dylanmoriarty.github.io/blog/missing-maps.html" target="_blank">elsewhere on this site</a>.

<div class="images"><img src="../assets/graphics/blog/mms/Intro.svg" />
</div>

Outside of those, I also helped create map styles for <a href="https://openaq.org/#/map" target="_blank">OpenAQ</a>, <a href="https://map.openaerialmap.org/#/?_k=sz9v83" target="_blank">OpenAerialMap</a>, & a bunch of World Bank projects. Here's a handful of highlights:

<div class="images"><img src="../assets/graphics/blog/six/off-grid.gif" />
</div>

<a href="http://offgrid.energydata.info/#/explore?_k=c60xxg" target="_blank">Off-Grid Market Opportunities Explorer</a>, a tool for the World Bank to assess where to private investors should focus development based on various geospatial variables. The above image shows my favorite contribution: a combined legend & interactive filter for the data.

<div class="images"><img src="../assets/graphics/blog/six/openaq.gif" />
</div>

<a href="https://openaq.org/#/map" target="_blank">OpenAQ</a> is an open database for air quality information across the world. For this there was a lot of hoopla over what the color scheme would be for the points. We initially didn't want to use a diverging scheme because there isn't really a halfway _turning point_ where the amount of a mineral in the air makes it suddenly bad. We tried out a few other schemes, but the users sent a lot of feedback that they missed the red/blue dichotomy. Gotta go with what works for the users.

<div class="images"><img src="../assets/graphics/blog/six/roads.jpg" />
</div>

The above image shows road styling for <a href="https://developmentseed.org/blog/2015/04/15/openstreetmap-for-government/" target="_blank">Open Roads</a>, a custom OSM iD editor for the World Bank. Was a fun challenge figuring out how to make the same style look appropriate for both a satellite basemap & a very light one. We ended up making two different styles- one with a stronger casing so the roads pop on the sat imagery, and softer casing for the light version.

<div class="images"><img src="../assets/graphics/blog/six/oneweb.gif" />
</div>

This was a small tool made to let the client more easily make maps showing off selections of their data via a webmap. They wanted to be able to make selections, get aggregates, and be able to control the color of the selections. This led to a pretty fun venture into experimenting with combining React with Mapbox GL. Data values have been scrubbed from the shown gif.

{% include bits/chapters.html chapter='II' title='Branding'%}

I also did a handful of logos & swag work.

<div class="images"><img src="../assets/graphics/blog/six/logos.png">
	<figcaption>Logos for (in order): <a href="https://developmentseed.org/blog/2017/01/30/NASA-on-the-cloud/" target="_blank">Cumulus</a>- a cloud service for NASA's earth science data, <a href="http://www.dc125.us/" target="_blank">The Daily Cardinal 125th Anniversary</a>, <a href="https://github.com/sat-utils" target="_blank">SAT-UTILS</a>- open source utilities for processing satellite imagery, & <a href="https://developmentseed.org/blog/2016/05/16/macrocosm-easy/" target="_blank">MacrocOSM</a>- making a forks of OpenStreetMap API easier to use.</figcaption>
</div>

Development Seed goes to a quite a few conferences every year, so we enjoy having stylish shirts we can share with friends. I did a regular design that was just the flat logo on t-shirts, and also put together this:

<div class="images"><img src="../assets/graphics/blog/six/shirt.jpg">
	<figcaption>Notion here is Makeshift to the Moon! highlighting our general effective scrappiness.</figcaption>
</div>

I also had the honor of doing a bunch of graphics for Ian Schuler's camp ground wedding.

<div class="images"><img src="../assets/graphics/blog/six/wed.jpg">
	<figcaption></figcaption>
</div>

This included some imagery for his wedding site properly titled 'Wed Hot American Summer', and a map of the camp that I hear was a big hit.

<div class="images"><img src="../assets/graphics/blog/six/SmallerCampMap.jpg">
	<figcaption></figcaption>
</div>

{% include bits/chapters.html chapter='III' title='Diving into the OSM Community'%}

<div class="images"><img src="../assets/graphics/blog/six/sotm.jpg">
	<figcaption></figcaption>
</div>

Almost everything I've done this year has in some way shape or form related to OpenStreetMap. As I've contributed more to the OSM ecosystem, I've also dived further into the organizations around it.

Quite a few projects we've done at Development Seed are through the Humanitarian OpenStreetMap Team. As of this year, I've officially <a href="https://www.hotosm.org/users/dylan_moriarty" target="_blank">joined them as a voting member</a> to help make graphics for their communications.

<div class="images"><img src="../assets/graphics/blog/six/openaerialmap.jpg">
	<figcaption>OpenAerialMap was one such project with HOT we did. I put together the homepage for it, and even managed to get a little illustrated bit towards the end.</figcaption>
</div>

I also managed to attend the 2016 HOT Summit & State of the Map conference in Brussels (pictured above). I gave <a href="https://www.slideshare.net/DylanMoriarty/tracking-openstreetmap-contributions-in-real-time" target="_blank">a talk at State of the Map</a> on the api behind the Missing Maps project, and while video exists of it the sounds messed up. Ah well. I gave the same talk to the North American Cartographic Information Society's conference shortly thereafter, & an additional one on <a href="https://www.slideshare.net/DylanMoriarty/maps-by-hands" target="_blank">maps by hands</a>.

Back in DC, after pestering them for enough times about it, I also joined MaptimeDC as an organizer. Looking to do exciting things for them!

{% include bits/chapters.html chapter='IV' title='...but most importantly'%}

<div class="images"><img src="../assets/graphics/blog/six/bowie.jpg">
	<figcaption>From Spotify's end of the year review of what you listened to.</figcaption>
</div>

RIP Bowie. Black Star was a spectacular swan song.

{% include bits/chapters.html chapter='V' title="What's next?"%}

More work with OpenStreetMap, I'm sure. Hopefully more illustrations as well as more work around political engagement. I hope you'll stick around with me to see through 2017- It's gonna be good.
