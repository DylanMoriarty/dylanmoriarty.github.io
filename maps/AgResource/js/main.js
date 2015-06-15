//Setting up both the current time (When in the time series of images the user is) and Number of Images (How many images there are at a given location) for use later.
var currenttime = 1;
var numberofimages = 0;
var dategrabber = "date_"

//Building a Welcome Box, WIP
// window.onload = welcomeinfobox();

// function welcomeinfobox(){
//     d3.select('#map')
//       .append('div')
//       .attr("width", 300)
//       .attr("height", 300)    
//       .attr("class", "welcomeinfobox")
//       .on("click", function(){
//         d3.select(".welcomeinfobox").remove();
//     })
// };

//Leaflet Map Properties
var map = L.map('map',{
  maxZoom: 10,
  minZoom: 6,
  zoomControl: false
}).setView([39.381018,-89.318848],6)
// Set Bounds to the map by a Top-Left and Bottom-Right coordinates
// .setMaxBounds([ [48.011975, -100.942383],[30.552800, -68.291016] ])
;

//Declare Tile Source
L.tileLayer(
  'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
  }).addTo(map);


//CSV Data in GeoJson form
var geojsonFeature = 
{"type":"FeatureCollection","features":[{"type":"Feature","properties":{"id":"1","source":"A","farm":"Farm 1","photos_no":"3","latitude":"40.928199","longitude":"-87.867406","date_1":"","date_2":"06/26/15","date_3":"07/26/15","date_4":"08/26/15"},"geometry":{"type":"Point","coordinates":[-87.867406,40.928199]}},{"type":"Feature","properties":{"id":"2","source":"A","farm":"Farm 2","photos_no":"3","latitude":"40.60932","longitude":"-88.061843","date_1":"04/14/15","date_2":"06/25/15","date_3":"07/26/15","date_4":"08/26/15"},"geometry":{"type":"Point","coordinates":[-88.061843,40.60932]}},{"type":"Feature","properties":{"id":"3","source":"A","farm":"Farm 3","photos_no":"4","latitude":"40.310633","longitude":"-88.231411","date_1":"04/11/15","date_2":"06/24/15","date_3":"07/26/15","date_4":"08/26/15"},"geometry":{"type":"Point","coordinates":[-88.231411,40.310633]}},{"type":"Feature","properties":{"id":"4","source":"A","farm":"Farm 4","photos_no":"3","latitude":"40.017931","longitude":"-88.331318","date_1":"03/20/15","date_2":"06/23/15","date_3":"07/26/15","date_4":"08/26/15"},"geometry":{"type":"Point","coordinates":[-88.331318,40.017931]}},{"type":"Feature","properties":{"id":"5","source":"P","farm":"Farm 5","photos_no":"4","latitude":"39.835404","longitude":"-88.53597","date_1":"05/19/15","date_2":"06/22/15","date_3":"07/26/15","date_4":"08/26/15"},"geometry":{"type":"Point","coordinates":[-88.53597,39.835404]}}]}

//Load Geojson Data
L.geoJson(geojsonFeature, {
  style: function(feature){
  //CSS Styling of Points Here
  },
  pointToLayer: function(feature, latlng){
  //Creating Markers- thissource grabs which source the photo is from, A for AgResource, or P for Public
    var thissource = feature.properties.source

  //This stores the Icon styling. Icon Anchor is where the point is anchored to relative to the image file.    
    var sourceIcon = L.icon({
      iconUrl: 'img/'+thissource+'.png',
      iconSize: [32, 32],
      iconAnchor: [16, 16]
    });

  //...and now we add it.
  return new L.marker(latlng, {icon: sourceIcon});

  // V-- Alternative way to just draw flat circles. Useful for testing.
  // return new L.CircleMarker(latlng, {radius: 10, fillOpacity: 0.5})
  },
  onEachFeature: function(feature, layer){
  //Interaction
    layer.on('click', function (e){
      //Grab how many images the selected farm has
      numberofimages = parseInt(feature.properties.photos_no);

      // If Current Time is greater than the number of images, reduce it to the final image. Otherwise, everythings good.
      if(currenttime > numberofimages){
        currenttime = numberofimages;
      }else{
        console.log("cool.")
      };

      //Grab the id of whichever point is selected
      var selectedfarm = feature.properties.id;

      //Variables to help grab the current date from selected point & current time
      var dategrabberequation = dategrabber+currenttime;
      var currentimagedate = feature.properties[dategrabberequation];

// feature.properties[curdate]

      //Create VCR control, add Info block 
      document.getElementById("info").innerHTML = 
      "<h1>"+feature.properties.farm+"</h1><div class ='infolinebreak'></div><div id=farmphoto></div><div class='buttons'><img src='img/time-end.png' class='time-end'><img src='img/time-next.png' class='time-next'><img src='img/time-prev.png' class='time-prev'><img src='img/time-reset.png' class='time-reset'><div class = datecontainer></div></div><div class ='bottominfolinebreak'></div>";
        $("#feature_infos").stop();
        $("#feature_infos").fadeIn("fast");

      //Functions that will build both the Photo & Date
      PhotoTimeline(selectedfarm)
      UpdateDate(currentimagedate);

      //VCR Button Interactions- Change CurrentTime, date, and re-run the photo-addin' function to accomodate the new value
        d3.select(".time-reset").on("click", function(){
          currenttime = 1;
          dategrabberequation = dategrabber+currenttime;
          currentimagedate = feature.properties[dategrabberequation];
          UpdateDate(currentimagedate);
          PhotoTimeline(selectedfarm);
        });

        d3.select(".time-prev").on("click", function(){
          if(currenttime>1){
          currenttime--;
          }else{
          currenttime=1;
          };
          dategrabberequation = dategrabber+currenttime;
          currentimagedate = feature.properties[dategrabberequation];
          UpdateDate(currentimagedate);                    
          PhotoTimeline(selectedfarm);
        });

        d3.select(".time-next").on("click", function(){
          if(currenttime < numberofimages){
            currenttime++;
          }else{
            currenttime = numberofimages;
          };
          console.log(currenttime);
          dategrabberequation = dategrabber+currenttime;
          currentimagedate = feature.properties[dategrabberequation];
          UpdateDate(currentimagedate);
          PhotoTimeline(selectedfarm);        
        });

        d3.select(".time-end").on("click", function(){
          currenttime = numberofimages;
          dategrabberequation = dategrabber+currenttime;
          currentimagedate = feature.properties[dategrabberequation];
          UpdateDate(currentimagedate);
          PhotoTimeline(selectedfarm)
        });

    })
  }
}).addTo(map);

//Put Leaflet Zoom controls in the top right corner (default is top left)
new L.Control.Zoom({ position: 'topright'}).addTo(map);

//Adds the images date to the info box
function UpdateDate(curdate){
  //Erases previous date
  $(".datecontainer").html("");

  //Inserts new date
  d3.select(".datecontainer")
    .append("div")
    .attr("width", 100)
    .attr("height", 50)
    .text(curdate);
};

//Function that Adds the new photo
function PhotoTimeline(farm){
  var currentimage = "img/"+farm+"/"+currenttime+".jpg";

  // console.log(currentimage);

  document.getElementById("farmphoto").innerHTML =
  "<img src='"+currentimage+"'></img>";

  // console.log(farm)
};


