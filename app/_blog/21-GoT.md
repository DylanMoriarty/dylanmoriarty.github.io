---
layout: post
title:  'Map of Thrones'
home: 'yes'
type: maps
description: Map of Thrones!
bannerimg: /banners/gotmapbanner
banner: hb-got.jpg
links: 
date: 2017-08-27
display: 'yes'
permalink: blog/got-map.html

scripts: 'Mapbox-GL'

twit-title: "GoT Map"
twit-descrip: "A fun little Mapbox "
twit-image: "http://dylanmoriarty.github.io/assets/graphics/blog/got/twitt.jpg"

---

<img src="../assets/graphics/blog/got/twitt.jpg" class="cheatin" />

<style>
  .full-bleed {
    position: relative;
    margin: 1rem 0 0;
    height: 580px;
  }

  .mapstyle {
    width:100%;
    height: 550px;
    position:absolute;
    left:0;
  }

  .mapboxgl-ctrl > button:last-child {
    display: none;
  }

  .scroll-enabler {
    background-color: #efefef;
    padding: 1rem;
    z-index: 9999;
  }

  .cheatin {
    display: none;
  }
</style>


<div class= "full-bleed">
  <div class="innershadow"></div>
  <div id="gotMap" class="mapstyle"></div>
</div>

<br>

{% include scripts/got-style.html %}

<script>
  mapboxgl.accessToken = 'pk.eyJ1IjoiZ3Rocm9uZXMiLCJhIjoiY2o2dHJhMGVvMGluNzJxcnAzZzRsb3M2bCJ9.kED7UULUxqdsnLpmrMDljA'

  var map = new mapboxgl.Map({
    container: 'gotMap',
    style: style,
    zoom: 1.8,
    center: [40,5],
  })

  map.on('load', function () {
    map.addControl(new mapboxgl.Navigation({position: 'top-left'}))
    singSong()
  })

  var clockTick = 0,
      clockCycle = 0,
      noteOne = 1,
      noteTwo = 0,
      noteThree = 0,
      noteFour = 0

  function barOfMusic(one, two, three, four) {
    noteOne = one
    noteTwo = two
    noteThree = three
    noteFour = four
  }

  function singSong() {
    var bard = setInterval(function () {
      clockTick++
      clockCycle++

      if(clockCycle === 200) {
        map.setPaintProperty('song-1', 'icon-opacity', 0)
        map.setPaintProperty('song-2', 'icon-opacity', 0)
        map.setPaintProperty('song-3', 'icon-opacity', 0)
        map.setPaintProperty('song-4', 'icon-opacity', 0)
        clearInterval(bard)
        return
      }

      if (clockTick === 1) {
        barOfMusic(0.5, 0.2, 0, 0)
      } else if (clockTick === 2) {
        barOfMusic(0, 1, 0, 0)
      } else if (clockTick === 3) {
        barOfMusic(0,0.5, 0.2, 0)
      } else if (clockTick === 4) {
        barOfMusic(0,0,1,0)
      } else if (clockTick === 5) {
        barOfMusic(0,0,0.5, 0.2)
      } else if (clockTick === 6) {
        barOfMusic(0,0,0,1)
      } else if (clockTick === 7) {
        barOfMusic(0.2,0,0,0.5)
      } else if (clockTick === 8) {
        barOfMusic(1,0,0,0)
        clockTick = 0
      }

      map.setPaintProperty('song-1', 'icon-opacity', noteOne)
      map.setPaintProperty('song-2', 'icon-opacity', noteTwo)
      map.setPaintProperty('song-3', 'icon-opacity', noteThree)
      map.setPaintProperty('song-4', 'icon-opacity', noteFour)
    }, 200)
  }

</script>

George R.R. Martin's Game of Thrones is a pretty fantastic story, and the density of the world building he put together for it is astounding. Every episode opens with zooming into different places in his world, & I thought it'd be fun to put together a version where you yourself could do that zoomin'.

Just before the new season dropped, I did a search to see if anyone had made {% include bits/tooltips.html face="Shapefiles" longtext="Think image files that have longitude & latitude coordinates baked into the image." %} of the Game of Thrones world. Alas, some person going by the username Cadael had! You can check it out yourself <a href="https://www.cartographersguild.com/showthread.php?t=30472" target="_blank">here at the Cartographers Guild.</a> Bless ya'll fantasy mappers. From there, I edited those files in QGIS to generate some waterline layers & tweak the label points to better cooperate, & finally pulled it all into Mapbox to style.

Hope ya'll enjoy the map! There's seven little doodles based on events of this season that I've scattered on the map- to see them, you'll have to zoom in tight. Good luck!

<div class="images smaller-image">
  <img src="../assets/graphics/blog/got/overlay.jpg">
  <figcaption>For anyone wondering, Westeros is actually just over Africa. The more you know~</figcaption>
</div>
