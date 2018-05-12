---
layout: post
title:  'Christmas Wishes'
home: 'yes'
type: maps
description: 2018 Christmas Wishlist
bannerimg: /banners/christmas-list
banner: hb-xmas-2017.jpg
links: 
date: 2017-11-20
display: 'yes'
permalink: blog/christmas-wishes.html

twit-title: "GoT Map"
twit-descrip: "A fun little Mapbox "
twit-image: "http://dylanmoriarty.github.io/assets/graphics/blog/got/twitt.jpg"

---

<style>
  .im-dreaming-of-a {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .im-dreaming-of-a:after {
    content: "";
    background-image: url('../assets/graphics/blog/xmas/snow.gif');
    z-index: 9999;
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0.15;
  }

  #Santas-Sack {
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-content: stretch;
    -ms-flex-line-pack: stretch;
    align-content: stretch;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
  }

  .gift {
    max-width: 250px;
    display: inline-block;
    margin: 2rem 1rem 1rem;
    padding-bottom: 0.5rem;
    transition: all 0.2s;
    cursor: pointer;
    background-color: white;
    box-shadow: 0 2px 2px rgba(0,0,0,0.2);
    text-align: center;

    font-size: 1rem;
    color: #bbb;
    font-weight: 600;

    -webkit-order: 0;
    -ms-flex-order: 0;
    order: 0;
    -webkit-flex: 0 1 auto;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    -webkit-align-self: auto;
    -ms-flex-item-align: auto;
    align-self: auto;
  }

  .presentContainer {
    position: relative;
  }

  .presentContainer:after {
    content: "";
    position: absolute;
    border: 1px solid #666;
    background-color: #999;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    top: 2.5rem;
    left: 50%;
    box-shadow: 0px 2px 2px rgba(0,0,0,0.3);
    transform: rotate(0) !important;
  }

  .gift:hover {
    box-shadow: 0 2px 16px rgba(0,0,0,0.3);
    color: #e5c53e;
    transform: rotate(0) !important;
  }

  .gift-pic {
    margin-top: 0.25rem;
    max-width: 100%;
  }

  #Santa {
    position: fixed;
    left: 40%;
    bottom: -700px;
    z-index: 9999;
    -webkit-animation: myOrbit 90s linear infinite; /* Chrome, Safari 5 */
       -moz-animation: myOrbit 90s linear infinite; /* Firefox 5-15 */
         -o-animation: myOrbit 90s linear infinite; /* Opera 12+ */
            animation: myOrbit 90s linear infinite;
  }

  #Santa img {
    transform: rotate(-10deg);
  }

  @-webkit-keyframes myOrbit {
      0% { -webkit-transform: rotate(0deg) translateX(1200px) rotate(0deg); }
      20% { -webkit-transform: rotate(0deg) translateX(1200px) rotate(0deg); }
      40%   { -webkit-transform: rotate(360deg) translateX(1200px) rotate(-360deg); }
      100% {
      }
  }

  @-moz-keyframes myOrbit {
      0% { -moz-transform: rotate(0deg) translateX(1200px) rotate(0deg); }
      20% { -moz-transform: rotate(0deg) translateX(1200px) rotate(0deg); }
      40%   { -moz-transform: rotate(360deg) translateX(1200px) rotate(-360deg); }
      100% {}
  }

  @-o-keyframes myOrbit {
      0% { -o-transform: rotate(0deg) translateX(1200px) rotate(0deg); }
      20% { -o-transform: rotate(0deg) translateX(1200px) rotate(0deg); }
      40%   { -o-transform: rotate(360deg) translateX(1200px) rotate(-360deg); }
      100% {}
  }

  @keyframes myOrbit {
      0% { transform: rotate(0deg) translateX(1000px) rotate(0deg); }
      20% { transform: rotate(0deg) translateX(1000px) rotate(0deg); }
      40%   { transform: rotate(360deg) translateX(1000px) rotate(-360deg); }
      100% { transform: rotate(360deg) translateX(1000px) rotate(-360deg) }
  }
</style>

<div id="Santa">
  <a href="https://www.youtube.com/watch?v=a8qE6WQmNus" target="_blank">
    <img src="../assets/graphics/blog/xmas/santa.gif">
  </a>
</div>

<div class="im-dreaming-of-a"></div>

<p><h2>2017 Christmas gift wish list ~*</h2></p>

<div id="Santas-Sack"></div>

<script>
  const presents = [
    {
      title: 'Nina Sings the Blues',
      image: 'nina',
      link: 'https://www.discogs.com/sell/list?sort=price%2Casc&limit=25&master_id=122261&ev=mb&format=Vinyl',
      cost: 1
    },
    {
      title: 'Decent Speakers',
      image: 'speakers',
      link: 'https://www.logitech.com/en-us/product/z537-bluetooth-speaker-system?crid=1548',
      cost: 3
    },
    {
      title: 'Phone Charger Cables',
      image: 'cable',
      link: 'https://www.amazon.com/Anker-PowerLine-Samsung-MacBook-Nintendo/dp/B071G5YCS6/ref=sr_1_3?s=electronics&ie=UTF8&qid=1511647500&sr=1-3&keywords=Anker+PowerLine+red+usb+C',
      cost: 1
    },
    {
      title: 'Charging Dock',
      image: 'charger',
      link: 'https://www.amazon.com/dp/B01N2HIR9R/ref=sr_1_10?camp=217145&creative=399373&creativeASIN=B01N2HIR9R&ie=UTF8&keywords=iPhone%206%20Charger&kwr_id=988&linkCode=as2&qid=1511588704&sr=1-10&tag=ianker-20',
      cost: 1
    },
    {
      title: 'Waffle Iron',
      image: 'waffles',
      link: 'https://www.amazon.com/KRUPS-Adjustable-Temperature-Belgian-Removable/dp/B01FYIAQA6/ref=sr_1_3?ie=UTF8&qid=1511640971&sr=8-3&keywords=krups+4+slice+belgian+waffle+maker',
      cost: 2
    },
    {
      title: 'Summit Ice Softshell Jacket - M',
      image: 'jacket',
      link: 'http://www.summiticeapparel.com/jackets',
      cost: 3
    },
    {
      title: 'Songs of Love & Hate',
      image: 'leonard',
      link: 'https://www.discogs.com/sell/list?master_id=3933&ev=mb&format=Vinyl',
      cost: 1
    },
    {
      title: 'How Buildings Learn',
      image: 'buildings',
      link: 'https://www.amazon.com/dp/0140139966/_encoding=UTF8?coliid=I2NYE611OX1Z2O&colid=3O4O5DPUW7O1N',
      cost: 2
    },
    {
      title: 'Fancy Scale',
      image: 'scale',
      link: 'https://www.amazon.com/dp/B01MFAABKO/?tag=nytgg2017-20&ascsubtag=selfzz231',
      cost: 2
    },
    {
      title: 'Lady in Satin',
      image: 'billie',
      link: 'https://www.discogs.com/sell/list?master_id=123567&ev=mb&format=Vinyl',
      cost: 1
    },
    {
      title: 'The Modern Japanese Garden',
      image: 'garden',
      link: 'https://www.amazon.com/Modern-Japanese-Garden-Michiko-Rico/dp/0804834377',
      cost: 2
    },
    {
      title: 'All on the First Day',
      image: 'tony',
      link: 'https://www.discogs.com/sell/list?master_id=430308&ev=mb&format=Vinyl',
      cost: 1
    }
  ]

  function addCheer (title, image, link, cost, rand) {
    const santasSack = document.getElementById("Santas-Sack"); 

    const presentContainer = document.createElement('div')
    presentContainer.className = 'presentContainer'

    const newPresent = document.createElement('a')
    newPresent.className = 'gift'
    newPresent.setAttribute('href', link);
    newPresent.setAttribute('target', '_blank');

    const dollar = '$'

    const newContent = document.createTextNode(title + ' – ' + dollar.repeat(cost) + ' ');
    newContent.className = 'gift-title'

    var presentPic = document.createElement("img");
    presentPic.className = 'gift-pic'
    presentPic.src = '../assets/graphics/blog/xmas/' + image + '.jpg';

    newPresent.appendChild(presentPic)
    newPresent.appendChild(newContent)
    presentContainer.appendChild(newPresent)

    newPresent.style.transform = 'rotate(' + rand + 'deg)'

    santasSack.appendChild(presentContainer);
  }

  presents.forEach((p)=> {
    const coin = Math.random() > 0.3 ? 1 : -1;
    const rot = (Math.random() * 5  + 0.5) * coin
    addCheer(p.title, p.image, p.link, p.cost, rot)
  })
</script>


