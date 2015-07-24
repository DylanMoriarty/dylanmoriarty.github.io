//Setting up both the current time (When in the time series of images the user is) and Number of Images (How many images there are at a given location) for use later. Also a bunch of null variables that'll get stuff thrown in em' in a bit.
var currenttime = 20;
var numberofimages = 0;
var dategrabber = "date_"
var highlight = null;
var croptype = null;
var corn = null;
var soy = null;
var wheat = null;

//Leaflet Map Properties
var map = L.map('map',{
  maxZoom: 8,
  minZoom: 4,
  zoomControl: false
}).setView([39.381018,-89.318848],7)
// Set Bounds to the map by a Top-Left and Bottom-Right coordinates
.setMaxBounds([ [71.566641, -170.332031],[-4.434044, -53.964844] ])
;

//Declare Tile Source
L.tileLayer(
  'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
  }).addTo(map);

//paste Corn.geojson here!
$.getJSON("data/corn.geojson", function (data) {
  corn = data;
  makeJson(data);
});

//CSV Data in GeoJson form
var geojsonFeature = corn;

//For 'X' on introblock
d3.select(".introcloseme").on("click", function(){
  $(".introductionblockfront").fadeOut("fast");
});

//For Switching between Geojsons...
d3.select(".trigger1").on("click", function(){
  var geojsonFeature = corn;
  $('.leaflet-control-zoom').remove();
  $('.leaflet-marker-icon').remove();
  $("#feature_infos").fadeOut("fast");
  $.getJSON("data/corn.geojson", function (data) {
    corn = data;
    makeJson(data);
  });
});

d3.select(".trigger2").on("click", function(){
  var geojsonFeature = soy;
  $('.leaflet-control-zoom').remove();
  $('.leaflet-marker-icon').remove();
  $("#feature_infos").fadeOut("fast");
  $.getJSON("data/soy.geojson", function (data) {
    soy = data;
    makeJson(data);
  });
});

d3.select(".trigger3").on("click", function(){
  var geojsonFeature = wheat;
  $('.leaflet-control-zoom').remove();
  $('.leaflet-marker-icon').remove();
  $("#feature_infos").fadeOut("fast");
  $.getJSON("data/wheat.geojson", function (data) {
    wheat = data;
    makeJson(data);
  });

});

function makeJson(geojsonFeature){
  //Load Geojson Data
  L.geoJson(geojsonFeature, {
    pointToLayer: function(feature, latlng){
      //Creating Markers- thissource grabs which source the photo is from, A for AgResource, or P for Public.
      var thissource = feature.properties.source;
      var thissourcestring = String(feature.properties.source);
      var thisid = String(feature.properties.id);

      //Setup icon properties. Size is the size of the icon, and Anchor is which pixel will be on the Lat/Lng
      var IconRoot = L.Icon.extend({
        options:{
          iconSize: [32, 32],
          iconAnchor: [16, 16],
          className: thissourcestring+" "+thisid+"iconids",
        }
      })

      //Declare the image source...
      var sourceIcon = new IconRoot({iconUrl: 'img/'+thissource+'.png'})

      //...and now we add the markers to the map.
      return L.marker(latlng, {icon: sourceIcon});
      },
      onEachFeature: function(feature, layer){
      //Interaction
        layer.on('click', function (e){
          //Remove Introduction block
          d3.selectAll(".introductionblockfront").remove();

          //Determine which croptype is currently selected
          if(geojsonFeature == corn){
            croptype = "corn";
          }else if(geojsonFeature == soy){
            croptype = "soy";
          }else if(geojsonFeature == wheat){
            croptype = "wheat";
          };

          //Need to re-declare this variable...
          thissource = feature.properties.source

          //Reset all icons back to the non-highlighted 
          $('.A').attr("src", 'img/A.png');
          $('.P').attr("src", 'img/P.png');
          //Change THIS icon to the highlighted version
          $(layer._icon).attr("src", 'img/h'+thissource+'.png')

          //Grab how many images the selected farm has
          numberofimages = parseInt(feature.properties.photos_no);

          // Sets Current Time to the final image.
          // currenttime = numberofimages;

          // If Current Time is greater than the number of images, reduce it to the final image. Otherwise, everythings good.
          if(currenttime > numberofimages){
            currenttime = numberofimages;
          };

          //Grab the id of whichever point is selected
          var selectedfarm = feature.properties.id;

          //Variables to help grab the current date from selected point & current time
          var dategrabberequation = dategrabber+currenttime;
          var currentimagedate = feature.properties[dategrabberequation];

          //Create VCR control, add Info block 
          document.getElementById("info").innerHTML = 
          "<div class='infoboxheader'><h1>"+feature.properties.farm+"</h1><img src='img/x.png' class = 'closeme'></img></div><div class ='linebreak'></div><div id=farmphoto></div><div class='buttons'><img src='img/time-end.png' class='time-end'><img src='img/time-next.png' class='time-next'><img src='img/time-prev.png' class='time-prev'><img src='img/time-reset.png' class='time-reset'><div class = datecontainer></div></div><div class ='bottominfolinebreak'></div>";
            $("#feature_infos").stop();
            $("#feature_infos").fadeIn("fast");

          //Functions that will build both the Photo & Date
          PhotoTimeline(selectedfarm)
          UpdateDate(currentimagedate, currenttime, numberofimages);
          updateVCRcontrols();

          //VCR Button Interactions- Change CurrentTime, date, and re-run the photo-addin' function to accomodate the new value
            d3.select(".time-reset").on("click", function(){
              currenttime = 1;
              timeclickfunctions();
            });

            d3.select(".time-prev").on("click", function(){
              if(currenttime>1){
              currenttime--;
              }else{
              currenttime=1;
              };
              timeclickfunctions();
            });

            d3.select(".time-next").on("click", function(){
              if(currenttime < numberofimages){
                currenttime++;
              }else{
                currenttime = numberofimages;
              };
              timeclickfunctions(); 
            });

            d3.select(".time-end").on("click", function(){
              currenttime = numberofimages;
              timeclickfunctions();
            });

            //Just putting all the other functions that should run when the time series is triggered 
            function timeclickfunctions(){
              dategrabberequation = dategrabber+currenttime;
              currentimagedate = feature.properties[dategrabberequation];
              UpdateDate(currentimagedate, currenttime, numberofimages);
              PhotoTimeline(selectedfarm);
              updateVCRcontrols();
            }

            d3.select(".closeme").on("click", function(){
              $("#feature_infos").fadeOut("fast");
            });
        })
      }
    }).addTo(map);

  //Put Leaflet Zoom controls in the top right corner (default is top left)
  new L.Control.Zoom({ position: 'topright'}).addTo(map);

  //Adds the image's date to the info box
  function UpdateDate(curdate, currenttime, numberofimages){
    //Erases previous date
    $(".datecontainer").html("");
    //Test to see if there is a date, and if so tag it onto the end of the image numbers...
    if(Boolean(curdate) == true){
    d3.select(".datecontainer")
      .append("div")
      .attr("width", 100)
      .attr("height", 50)
      .text("Image "+currenttime+" of "+numberofimages +" taken on "+curdate);
      }else{
      d3.select(".datecontainer")
      .append("div")
      .attr("width", 100)
      .attr("height", 50)
      .text("Image "+currenttime+" of "+numberofimages);
      };      
   };
};

//Setup a style for the states to follow...
var stateStyle = {
  "color": "#adb674",
  "fillColor": "none",
  "opacity": 1,
  "weight": 1,
};

//Grab the geoJson externally an slap it on the map.
$.getJSON("data/northamerica.geojson", function (data) {
  L.geoJson(data, {
      style: function(feature){
        return stateStyle
      }
  }).addTo(map);
});

//Function that Adds the new photo
function PhotoTimeline(farm){
  var currentimage = "img/"+croptype+"/"+farm+"/"+currenttime+".jpg";

  document.getElementById("farmphoto").innerHTML =
  "<img src='"+currentimage+"'></img>";
};

//Looks at what the currenttime is and greys out VCR controls that will effecitvely do nothing.
function updateVCRcontrols(){
          if(currenttime == 1){
            $('.time-reset').attr("src", 'img/null_time-reset.png');
          }else{
            $('.time-reset').attr("src", 'img/time-reset.png');
          }

          if(currenttime == 1){
            $('.time-prev').attr("src", 'img/null_time-prev.png');
          }else{
            $('.time-prev').attr("src", 'img/time-prev.png');
          }          

          if(currenttime == numberofimages){
            $('.time-next').attr("src", 'img/null_time-next.png');
          }else{
            $('.time-next').attr("src", 'img/time-next.png');
          }

          if(currenttime == numberofimages){
            $('.time-end').attr("src", 'img/null_time-end.png');
          }else{
            $('.time-end').attr("src", 'img/time-end.png');
          }
};