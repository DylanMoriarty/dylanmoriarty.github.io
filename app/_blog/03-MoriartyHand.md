---
layout: post
title: Moriarty Hands
type: maps
home: 'yes'
description: Moriarty Hand; a vector linework with human error
bannerimg: blog/moh/banner
banner: banner1.jpg
links: <a href="http://www.projectlinework.org/" target="_blank">Download Linework</a>  | <a href="/assets/data/MoriartyFont.zip" target="_blank">Download Font</a> 
date: 2016-5-30
display: 'yes'
permalink: blog/moriarty-hand.html
scripts: 'Mapbox-GL MyHand'

---

Over a few days this past summer I took to drawing the world. Or, well, linework of it. More recently I cobbled together a font based off my own handwriting. Why? Read on.

<div class= "full-bleed">
	<div id="map"></div>
</div>
<br>

<style>
	.full-bleed{
		margin:2em 0 1em;
		height: 350px;
	}

	#map{
		width:100%;
		height: 350px;
		position:absolute;
		left:0;
		border: solid 1px #888;
	}
</style>

<script>
	mapboxgl.accessToken = 'pk.eyJ1IjoiZG1vcmlhcnR5IiwiYSI6Ikd3T29EOWMifQ.-DKJ4ernht84AZmc6Bk51Q';
	var map = new mapboxgl.Map({
	    container: 'map',
	    style: 'mapbox://styles/dmoriarty/ciohfutz0000vaunt9niot97s',
	    zoom: 1,
	    center: [0, 0]
	});

	// Disables zoom functionality, allowing for users to not get stuck on it scrolling down the page.
	// ------------------------------------
	map.scrollZoom.disable();

	// Adds Zoom controls for the map to make up for removed scroll functionality
	// ------------------------------------
	map.addControl(new mapboxgl.Navigation({position: 'top-left'})); 

</script>

{% include bits/chapter1.html %}I
{% include bits/chapter2.html %}Charmingly Inaccurate
{% include bits/chapter3.html %}

Almost all Cartographers like their data percise and accurate. Therefore almost everyone uses the same georeferenced linework as a base for their maps.

Still, not all maps need such percision! As {% include bits/tooltips.html face="Daniel Huffman" longtext="Daniel is a freelance Cartographer, lecturer, and all around smart guy. He runs [somethingaboutmaps](https://somethingaboutmaps.wordpress.com)" %} puts it: 

> "[Project Linework is a] library of handcrafted vector linework for cartography, each designed in a unique aesthetic style. They are meant to break us away from default line paths that we so often rely on by providing more visually-interesting alternatives."

A great comparison are fonts. The root goals for a font are that it A) has clear, distinct letters, & B) that it is consistent. We could very well just use <span style="font-family: Arial">Arial</span> for everything. But we don't, as we know type can be manipulated to better convey the statements mission, whether it be selling milk, promoting art, or just letting folks know casual Friday is coming up.

In occasional cases, even geographic ones, precision can take a back seat to pushing a mood.

<div class="images"><img class= "ibd" src="../assets/graphics/blog/moh/fam-map.jpg"><fig>This pre-dates the linework, but is exactly the kind of map that benefits from the looser style.</fig></div>



{% include bits/chapter1.html %}II
{% include bits/chapter2.html %}The Linework
{% include bits/chapter3.html %}

We wanted to make a linework that looked hand drawn, but not inaccurate to the point of it being useless. I first tried to eyeball it. It went disastrously. Next I tried tracing a print out of an accurate base but that proved too close. It resembled shaky-cam NaturalEarthData.

We determined the best way to get a nice balance was to use our print out of NaturalEarthData as a base and make markers around the boundaries- at tips of coasts or where country borders split. Then I'd eyeball the spaces in between doing it freehand. 

<div class="images"><img class= "" src="../assets/graphics/blog/moh/difference.png"><fig>The <span style="color:red">red</span> outlines in this image are the accurate source, NaturalEarthData. The black is Moriarty Hand. With the overlap it's clear where I traced vs. where it was free-handed.</fig></div>

For example, for Florida I marked where the south-most tip was, where it bent to, and then drew in the rest. This put things in roughly the right place with enough flourishes and errors for it to truly look manmade.

As for converting the sketch I did into a Shapefile, well, that's something you would need to bug Daniel about. After we both cleaned up the scanned drawing, he took to actually georeferencing it in ArcGIS. As I understand it, it was very tedious and I can't thank him enough for taking it on. Thanks Daniel!

{% include bits/chapter1.html %}<span class="MyHand" style="font-size:1.5em; letter-spacing:5px">III</span>
{% include bits/chapter2.html %}<span class="MyHand" style="font-size:1.2em;">Making a Font</span>
{% include bits/chapter3.html %}

It always feels great when you want to do something and the first Google result provides a super easy method.

In this case, I used [http://www.myscriptfont.com/](http://www.myscriptfont.com/) to generate a font out of my handwriting. You just download their template, draw on it, re-upload it, and bang. You've got yourself a font.

<div class="images"><img class= "" src="../assets/graphics/blog/moh/font.png"><fig>Having a drawing tablet lowers the barrier on this even further.</fig></div>

It took a few tries to get something that looked _fairly_ consistent in it's weight & heights. It could certainly use some further tweaking, but the unevenness is much more true to my actual handwriting. Here's an example:

<div class="centerme"><span class="MyHand_b" style="font-size:1.6em">Ghost Rider</span></div>

<span class="MyHand">When the motorcyclist Johnny Blaze finds that his father Barton Blaze has a terminal cancer, he accepts a pact with the Mephistopheles, giving his soul for the health of his beloved father. But the devil deceives him, and Barton dies in a motorcycle accident during an exhibition. Johnny leaves the carnival, his town, his friends and his girlfriend Roxanne. Years later Johnny Blaze becomes a famous motorcyclist, who risks his life in his shows, and he meets Roxanne again, now a TV reporter. However, Mephistopheles proposes Johnny to release his contract if he become the "Ghost Rider" and defeat his evil son Blackheart, who wants to possess one thousand evil souls and transform hell on earth.
</span>
<br>
<br>

The immediate reason of making this font was to help launch a part of this website that I could use to write letters to folks and still make them feel more endearing than a regular old email would. After making it though, it's been fun to break out for miscellanious side projects.

{% include bits/chapter1.html %}IV
{% include bits/chapter2.html %}Putting it all together
{% include bits/chapter3.html %}

And with that, we have a sketchy georeferenced artwork that folks can use for their maps. We can project it, as well as layer other georeferenced data on top of it. I also have a font that's unique to myself to boot.

Feel free to use either of these for your projects. I'd love to see them in the wild.

<div class="centerme"><a href="http://www.projectlinework.org/" target="_blank">Download Linework</a>   &nbsp; | &nbsp;  <a href="/assets/data/MoriartyFont.zip" target="_blank">Download Font</a></div>

Enjoy!