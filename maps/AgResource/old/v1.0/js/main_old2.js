//Leaflet Map Properties
var map = L.map('map',{
  maxZoom: 10,
  minZoom: 6,
  zoomControl: false
}).setView([42.68,-89.01],6)
.setMaxBounds([ [48.011975, -100.942383],[30.552800, -68.291016] ])
;

//Declare Tile Source
L.tileLayer(
  'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
  }).addTo(map);

//CSV Data in GeoJson form
var geojsonFeature = 
{"type":"FeatureCollection","features":[{"type":"Feature","properties":{"id":"1","Supplier":"A","farm":"Farm 1","latitude":"40.928199","longitude":"-87.867406","img_1":"f1/img1.jpg","date_1":"03/19/15","Img_2":"f1/img2.jpg","Date_2":"03/22/15"},"geometry":{"type":"Point","coordinates":[-87.867406,40.928199]}},{"type":"Feature","properties":{"id":"2","Supplier":"A","farm":"Farm 2","latitude":"40.60932","longitude":"-88.061843","img_1":"f2/img1.jpg","date_1":"03/19/15","Img_2":"f2/img2.jpg","Date_2":"03/22/15"},"geometry":{"type":"Point","coordinates":[-88.061843,40.60932]}},{"type":"Feature","properties":{"id":"3","Supplier":"A","farm":"Farm 3","latitude":"40.310633","longitude":"-88.231411","img_1":"f3/img1.jpg","date_1":"03/19/15","Img_2":"f3/img2.jpg","Date_2":"03/22/15"},"geometry":{"type":"Point","coordinates":[-88.231411,40.310633]}},{"type":"Feature","properties":{"id":"4","Supplier":"A","farm":"Farm 4","latitude":"40.017931","longitude":"-88.331318","img_1":"f3/img1.jpg","date_1":"03/19/15","Img_2":"f3/img2.jpg","Date_2":"03/22/15"},"geometry":{"type":"Point","coordinates":[-88.331318,40.017931]}},{"type":"Feature","properties":{"id":"5","Supplier":"P","farm":"Farm 5","latitude":"39.835404","longitude":"-88.53597","img_1":"f3/img1.jpg","date_1":"03/19/15","Img_2":"f3/img2.jpg","Date_2":"03/22/15"},"geometry":{"type":"Point","coordinates":[-88.53597,39.835404]}}]}

//New Icons
var Icons = L.Icon.extend({
    options: {
        iconSize:     [36, 36],
        iconAnchor:   [22, 94],
        popupAnchor:  [-3, -76]
    }
});

var AgIcon = new Icons({iconUrl: 'img/agicon.png'}),
    PubIcon = new Icons({iconUrl: 'img/pubicon.png'});

L.icon = function (options) {
    return new L.Icon(options);
};

//Farm Point Style
var AgStyle = {
    "color": "#ff7800",
    "icon": AgIcon,
    "weight": 5,
    "opacity": 0.65
};

var PubStyle = {
    "color": "#7880ec",
    "icon": PubIcon,
    "weight": 5,
    "opacity": 0.65
};

//Load Geojson Data
L.geoJson(geojsonFeature, {
  style: function(feature){
    switch(feature.properties.Supplier){
      case 'A': return{AgStyle};
      case 'P': return{PubStyle};
    }
  }
}).addTo(map);

new L.Control.Zoom({ position: 'topright'}).addTo(map);

var ParkIcon = L.Icon.extend({
    options: {
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [18, 28]
    }
});


