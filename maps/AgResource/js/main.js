//Setting up both the current time (When in the time series of images the user is) and Number of Images (How many images there are at a given location) for use later.
var currenttime = 20;
var numberofimages = 0;
var dategrabber = "date_"
var highlight = null;
var croptype = null;

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

var corn = {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"id":"1","source":"A","farm":"","photos_no":"1","latitude":"40.825505","longitude":"-87.978425","date_1":"06/10/15","date_2":"06/16/15","date_3":"","date_4":""},"geometry":{"type":"Point","coordinates":[-87.978425,40.825505]}},{"type":"Feature","properties":{"id":"2","source":"A","farm":"","photos_no":"1","latitude":"40.561246","longitude":"-88.028661","date_1":"06/10/15","date_2":"06/16/15","date_3":"","date_4":""},"geometry":{"type":"Point","coordinates":[-88.028661,40.561246]}},{"type":"Feature","properties":{"id":"3","source":"A","farm":"","photos_no":"1","latitude":"40.414997","longitude":"-88.064453","date_1":"06/10/15","date_2":"06/16/15","date_3":"","date_4":""},"geometry":{"type":"Point","coordinates":[-88.064453,40.414997]}},{"type":"Feature","properties":{"id":"4","source":"A","farm":"","photos_no":"1","latitude":"40.205254","longitude":"-88.240197","date_1":"06/10/15","date_2":"06/16/15","date_3":"","date_4":""},"geometry":{"type":"Point","coordinates":[-88.240197,40.205254]}},{"type":"Feature","properties":{"id":"5","source":"A","farm":"","photos_no":"1","latitude":"39.846498","longitude":"-88.292335","date_1":"06/10/15","date_2":"06/16/15","date_3":"","date_4":""},"geometry":{"type":"Point","coordinates":[-88.292335,39.846498]}},{"type":"Feature","properties":{"id":"6","source":"A","farm":"","photos_no":"1","latitude":"39.857392","longitude":"-88.500862","date_1":"06/10/15","date_2":"06/16/15","date_3":"","date_4":""},"geometry":{"type":"Point","coordinates":[-88.500862,39.857392]}}]}

var soy = {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"id":"1","source":"P","farm":"","photos_no":"1","latitude":"41.825505","longitude":"-87.978425","date_1":"06/10/15","date_2":"06/16/15","date_3":"","date_4":""},"geometry":{"type":"Point","coordinates":[-87.978425,41.825505]}},{"type":"Feature","properties":{"id":"2","source":"A","farm":"","photos_no":"1","latitude":"41.561246","longitude":"-88.028661","date_1":"06/10/15","date_2":"06/16/15","date_3":"","date_4":""},"geometry":{"type":"Point","coordinates":[-88.028661,41.561246]}},{"type":"Feature","properties":{"id":"3","source":"P","farm":"","photos_no":"1","latitude":"41.414997","longitude":"-88.064453","date_1":"06/10/15","date_2":"06/16/15","date_3":"","date_4":""},"geometry":{"type":"Point","coordinates":[-88.064453,41.414997]}},{"type":"Feature","properties":{"id":"4","source":"A","farm":"","photos_no":"1","latitude":"41.205254","longitude":"-88.240197","date_1":"06/10/15","date_2":"06/16/15","date_3":"","date_4":""},"geometry":{"type":"Point","coordinates":[-88.240197,41.205254]}},{"type":"Feature","properties":{"id":"5","source":"P","farm":"","photos_no":"1","latitude":"40.846498","longitude":"-88.292335","date_1":"06/10/15","date_2":"06/16/15","date_3":"","date_4":""},"geometry":{"type":"Point","coordinates":[-88.292335,40.846498]}},{"type":"Feature","properties":{"id":"6","source":"A","farm":"","photos_no":"1","latitude":"40.857392","longitude":"-88.500862","date_1":"06/10/15","date_2":"06/16/15","date_3":"","date_4":""},"geometry":{"type":"Point","coordinates":[-88.500862,40.857392]}}]}

var wheat = {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"id":"1","source":"A","farm":"","photos_no":"1","latitude":"41.825505","longitude":"-85.978425","date_1":"06/10/15","date_2":"06/16/15","date_3":"","date_4":""},"geometry":{"type":"Point","coordinates":[-85.978425,41.825505]}},{"type":"Feature","properties":{"id":"2","source":"P","farm":"","photos_no":"1","latitude":"41.561246","longitude":"-86.028661","date_1":"06/10/15","date_2":"06/16/15","date_3":"","date_4":""},"geometry":{"type":"Point","coordinates":[-86.028661,41.561246]}},{"type":"Feature","properties":{"id":"3","source":"A","farm":"","photos_no":"1","latitude":"41.414997","longitude":"-86.064453","date_1":"06/10/15","date_2":"06/16/15","date_3":"","date_4":""},"geometry":{"type":"Point","coordinates":[-86.064453,41.414997]}},{"type":"Feature","properties":{"id":"4","source":"P","farm":"","photos_no":"1","latitude":"41.205254","longitude":"-86.240197","date_1":"06/10/15","date_2":"06/16/15","date_3":"","date_4":""},"geometry":{"type":"Point","coordinates":[-86.240197,41.205254]}},{"type":"Feature","properties":{"id":"5","source":"A","farm":"","photos_no":"1","latitude":"40.846498","longitude":"-86.292335","date_1":"06/10/15","date_2":"06/16/15","date_3":"","date_4":""},"geometry":{"type":"Point","coordinates":[-86.292335,40.846498]}},{"type":"Feature","properties":{"id":"6","source":"P","farm":"","photos_no":"1","latitude":"40.857392","longitude":"-86.500862","date_1":"06/10/15","date_2":"06/16/15","date_3":"","date_4":""},"geometry":{"type":"Point","coordinates":[-86.500862,40.857392]}}]}


//CSV Data in GeoJson form
var geojsonFeature = corn;

//For Switching between Geojsons...
d3.select(".trigger1").on("click", function(){
  var geojsonFeature = corn;
  $('.leaflet-control-zoom').remove();
  $('.leaflet-marker-icon').remove();
  $("#feature_infos").fadeOut("fast");
  makeJson(geojsonFeature);
});

d3.select(".trigger2").on("click", function(){
  var geojsonFeature = soy;
  $('.leaflet-control-zoom').remove();
  $('.leaflet-marker-icon').remove();
  $("#feature_infos").fadeOut("fast");
  makeJson(geojsonFeature);
});

d3.select(".trigger3").on("click", function(){
  var geojsonFeature = wheat;
  $('.leaflet-control-zoom').remove();
  $('.leaflet-marker-icon').remove();
  $("#feature_infos").fadeOut("fast");
  makeJson(geojsonFeature);
});

window.onload = makeJson(geojsonFeature);

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
};
//Function that Adds the new photo
function PhotoTimeline(farm){
  var currentimage = "img/"+croptype+"/"+farm+"/"+currenttime+".jpg";

  document.getElementById("farmphoto").innerHTML =
  "<img src='"+currentimage+"'></img>";
};