---
layout: post
title:  <a href="../"><i class="fa fa-home fa"></i> /</a> Missing Maps
type: maps
description: Incentivizing mapping on OSM for humanitarian projects
bannerimg: /banners/missingmaps
banner: ../assets/graphics/banners/banner4.jpg
links: <a href="http://www.missingmaps.org/" target="_blank"> Check out the site here</a> | <a href="https://github.com/missingmaps" target="_blank"><i class="fa fa-github fa"></i> Github code</a> 

---

Howdy folks,

I've been asked a lot what I do at Development Seed. Well, in this instance, I designed a basemap for National Geographic!

{% include bits/chapter1.html %}I
{% include bits/chapter2.html %}Love Your Park
{% include bits/chapter3.html %}

The basemap was going to be a major part of a minor component of an overall celebration for the National Park Service turning 100 years old. Essientially the idea was that people could hop onto this map, find a National Park or one in their hometown, and pledge to do something nice for it.

What was super exciting about this opportunity besides that it was with the historical summit of solid artographic design was that it was something _new_ for them. They have design nailed down when it comes to beautiful small scale (world-view) maps- but they don't really have a standard for the large scale (think city street view). This meant I had a lot of realitive freedom in what that would look like, and how to scale it down from the distinctive style NG is so well known for.

Another request was for all the parks not be visible right away, instead having the National Parks be visible at first and have the rest 'turn on' as the user zooms in. 

{% include bits/chapter1.html %}III
{% include bits/chapter2.html %}The Tool formerly known as Mapbox Studio
{% include bits/chapter3.html %}

Mapbox takes data from OpenStreetMap and lets us style it using CartoCSS. 

Let's unpack that.

OpenStreetMap is a wikipedia-style dataset of the world. Anyone can contribute and anyone can use the data from it. This makes the dataset invaluable for Humanitarian organizations who can use it to communicate the status of buildings immediately between themselves during crisis. 

Included in the dataset are polygons for everything: roads, rivers, bridges, buildings, towns, forests, parks, etc. and a lot of it has metadata for everyting from names to use. Because anyone can edit it, this metadata is an absolute mess, but it's there all out in the open.

Mapbox hosts a  OSM data on their own servers. This means we don't need to upload a dataset (617 GB uncompressed) containing all the worlds roads, rivers, bridges, buildings, towns, forests, parks, etc. etc. Bless em' indeed.

It's worth mentioning Mapbox isn't the only company that offers this service. Both CartoDB & Mapzen tap into the well of OSM. Mapbox Studio, as of late 2015, the best tool for the job.

Why 'The Tool Formerly known as Mapbox Studio'? Well, the day after we finalized our battle plan for this they announced that a <i>new</i> Mapbox Studio would be released and the old one would be called Mapbox Studio <i>Classic</i>. Go figure.

{% include bits/chapter1.html %}IV
{% include bits/chapter2.html %}Park Data Problems
{% include bits/chapter3.html %}

Like I'd mentioned up there, Mapbox hosts OSM data which lets us easily style it. That's not to say they host <i>all</i> the data. To keep it up to date they do pulls of the core OSM database every 10 minutes or so, process it through some code, and pop out with data we use. This is super useful for all parties, but involves losing some of the data. We, afterall, don't need everything.

Mapbox spits out their OSM exports into several layers, included in Mapbox.Streets. One of these layers is called 'Point of Interest' and includes polygon data for parks. OSM park data has tags for whether it's a National Park or not. So boom. Done.

Nope.

As part of the process of trimming down OSM data, Mapbox loses the metadata on their park layer that identifies whether it's a National Park. It's grabbing a tag on the park polygons that simply identifies these features as "Nature Reserves", which is true, but useless for separating National Parks from the rest of the parks. Shit. 



- Sorting layers
- Thinking like Photoshop
- Sat Imagery Editing
- OSM Data Exports







<div class="images"><img src=""></div>