 	  	// change the set view section to match setting that you created in TileMill under the wrench icon .setView([lat, long], initial zoom level)
     // .setView([43.0760,-89.3816], 12).maxZoom(12);
	  var map = L.map('map',{
    // change the set view section to match setting that you created in TileMill under the wrench icon 
      ////constrain how far they will be able to zoom into the map
      maxZoom: 15,
      minZoom: 13,
      
      //max bounds: [[southLat,westLong],[northLat,eastLong]]
      //TileMill Set bounds box:  westLong,southLat,eastLong,northLat  
      //example this from tile mill go to the below example -89.5142,42.9715,-89.2354,43.1541 
    //   maxBounds:[ [42.6284,-89.0797],[42.7443,-88.952]]
    // .setView([center], zoom); // .setView([lat, long], initalZoom level)
    }).setView([42.68,-89.01],13);

  	
     
      
  L.tileLayer(
	//change the tile set to point to your tiles. After the v/3 insert the name of your mapbox account and id of tiles. 'http://a.tiles.mapbox.com/v3/YOUR_TILE_NAME//{z}/{x}/{y}.png')
	'http://a.tiles.mapbox.com/v3/dmoriarty.JanesvilleParks/{z}/{x}/{y}.png',{

	   // beetwen the '' incert the name and links to all of your data sources. use <a> tags to link to websites as needed
	   attribution: 'Made with: <a href="http://mapbox.com">TileMill</a> Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
	}).addTo(map);

//initial icon definiton, park 

var ParkIcon = L.Icon.extend({
    options: {
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [18, 28]
    }
});

//park icons... go!

var RegionalPark = new ParkIcon({iconurl: 'park-reg-small.png'}),
    CommunityPark = new ParkIcon({iconurl: 'park-com-small.png'}),
    NeighborhoodPark = new ParkIcon({iconurl: 'park-neh-small.png'});

//park definiton?

var RegionalPark = L.icon({
    iconUrl: 'park-reg-small.png',
    iconAnchor: [18, 18],
    popupAnchor: [0, -6],});


var CommunityPark = L.icon({
    iconUrl: 'park-com-small.png',
    iconAnchor: [18, 18],
    popupAnchor: [0, -6],});


var NeighborhoodPark = L.icon({
    iconUrl: 'park-neh-small.png',
    iconAnchor: [18, 18],
    popupAnchor: [0, -6],});

//INDIVIDUAL PARK ICONS GO
var NEP = document.createElement('DIV')
NEP.innerHTML = '<img src="images/parks/NortheastRegional.png"/>';

var PAL = document.createElement('DIV')
PAL.innerHTML = '<img src ="images/parks/Palmer.png"/>';

var ROC = document.createElement('DIV')
ROC.innerHTML = '<img src ="images/parks/RockportPark.png"/>';

var RIV = document.createElement('DIV')
RIV.innerHTML = '<img src = "images/parks/RiversidePark.png"/>';

var BON = document.createElement('DIV')
BON.innerHTML = '<img src = "images/parks/BondPark.png"/>';

var KIW = document.createElement('DIV')
KIW.innerHTML = '<img src = "images/parks/Kiwansis.png"/>';

var LUS = document.createElement('DIV')
LUS.innerHTML = '<img src = "images/parks/LustigPark.png"/>';

var MON = document.createElement('DIV')
MON.innerHTML = '<img src = "images/parks/Monterey.png"/>';

var OPT = document.createElement('DIV')
OPT.innerHTML = '<img src = "images/parks/Optimist.png"/>';

var TRX = document.createElement('DIV')
TRX.innerHTML = '<img src = "images/parks/Traxler.png"/>';

var ADM = document.createElement('DIV')
ADM.innerHTML = '<img src = "images/parks/Adams.png"/>';

var ARD = document.createElement('DIV')
ARD.innerHTML = '<img src = "images/parks/Ardon.png"/>';

var BRI = document.createElement('DIV')
BRI.innerHTML = '<img src = "images/parks/Briacrest.png"/>';

var BUR = document.createElement('DIV')
BUR.innerHTML = '<img src = "images//parks/Burbank.png"/>';

var CLR = document.createElement('DIV')
CLR.innerHTML = '<img src = "images/parks/Claremont.png"/>';

var CRT = document.createElement('DIV')
CRT.innerHTML = '<img src = "images/parks/Court.png"/>';

var EXC = document.createElement('DIV')
EXC.innerHTML = '<img src = "images/parks/Excalibur.png"/>';

var FRW = document.createElement('DIV')
FRW.innerHTML = '<img src = "images/parks/Fourth.png"/>';

var HMP = document.createElement('DIV')
HMP.innerHTML = '<img src = "images/parks/Hampshire.png"/>';

var HAR = document.createElement('DIV')
HAR.innerHTML = '<img src = "images/parks/Harmony.png"/>';

var HAW = document.createElement('DIV')
HAW.innerHTML = '<img src = "images/parks/Hawthrone.png"/>';

var HOL = document.createElement('DIV')
HOL.innerHTML = '<img src = "images/parks/Holiday.png"/>';

var HUR = document.createElement('DIV')
HUR.innerHTML = '<img src = "images/parks/Huron.png"/>';

var JEF = document.createElement('DIV')
JEF.innerHTML = '<img src = "images/parks/Holiday.png"/>';

var JFS = document.createElement('DIV')
JFS.innerHTML = '<img src = "images/parks/Jeffris.png"/>';

var LOC = document.createElement('DIV')
LOC.innerHTML = '<img src = "images/parks/Loch.png"/>';

var MAN = document.createElement('DIV')
MAN.innerHTML = '<img src = "images/parks/Mandale.png"/>';

var MAR = document.createElement('DIV')
MAR.innerHTML = '<img src = "images/parks/Marquette.png"/>';

var NAN = document.createElement('DIV')
NAN.innerHTML = '<img src = "images/parks/Nantucket.png"/>';

var PAR = document.createElement('DIV')
PAR.innerHTML = '<img src = "images/parks/Parker.png"/>';

var PCE = document.createElement('DIV')
PCE.innerHTML = '<img src = "images/parks/Peace.png"/>';

var PER = document.createElement('DIV')
PER.innerHTML = '<img src = "images/parks/Pershing.png"/>'

var PRA = document.createElement('DIV')
PRA.innerHTML = '<img src = "images/parks/Prairie.png"/>';

var RUG = document.createElement('DIV')
RUG.innerHTML = '<img src = "images/parks/Ruger.png"/>';

var RUS = document.createElement('DIV')
RUS.innerHTML = '<img src = "images/parks/Rushmore.png"/>';

var SHE = document.createElement('DIV')
SHE.innerHTML = '<img src = "images/parks/Sherwood.png"/>';

var SOU = document.createElement('DIV')
SOU.innerHTML = '<img src = "images/parks/Southgate.png"/>';

var VAL = document.createElement('DIV')
VAL.innerHTML = '<img src = "images/parks/Valley.png"/>';

var VIS = document.createElement('DIV')
VIS.innerHTML = '<img src = "images/parks/Vista.png"/>';

var FAL = document.createElement('DIV')
FAL.innerHTML = '<img src = "images/parks/parks/Falcon.png"/>';

var WAV = document.createElement('DIV')
WAV.innerHTML = '<img src = "images/parks/Waveland.png"/>';

var WOD = document.createElement('DIV')
WOD.innerHTML = '<img src = "images/parks/Woodcrest.png"/>';

var ZON = document.createElement('DIV')
ZON.innerHTML = '<img src = "images/parks/Zonta.png"/>';

// Palmer Park 
L.marker([42.676984, -88.992648], {icon: RegionalPark}).addTo(map).bindPopup(PAL);
L.marker([42.722826 , -88.968101], {icon: RegionalPark}).addTo(map).bindPopup(NEP);
L.marker([42.667944 , -89.057622], {icon: RegionalPark}).addTo(map).bindPopup(ROC);
L.marker([42.714192 , -89.042559], {icon: RegionalPark}).addTo(map).bindPopup(RIV);

L.marker([42.68096 , -89.04331], {icon: CommunityPark}).addTo(map).bindPopup(BON);
L.marker([42.712658 , -88.990159], {icon: CommunityPark}).addTo(map).bindPopup(KIW);
L.marker([42.666799 , -89.038482], {icon: CommunityPark}).addTo(map).bindPopup(LUS);
L.marker([42.670649 , -89.024448], {icon: CommunityPark}).addTo(map).bindPopup(MON);
L.marker([42.681949 , -88.962592], {icon: CommunityPark}).addTo(map).bindPopup(OPT);
L.marker([42.691745 , -89.031116], {icon: CommunityPark}).addTo(map).bindPopup(TRX);

L.marker([42.689035 , -89.019256], {icon: NeighborhoodPark}).addTo(map).bindPopup(ADM);
L.marker([42.712027 , -88.994923], {icon: NeighborhoodPark}).addTo(map).bindPopup(ARD);
L.marker([42.721975 , -88.979259], {icon: NeighborhoodPark}).addTo(map).bindPopup(BRI);
L.marker([42.646467 , -89.018826], {icon: NeighborhoodPark}).addTo(map).bindPopup(BUR);
L.marker([42.698194 , -88.988839], {icon: NeighborhoodPark}).addTo(map).bindPopup(CLR);
L.marker([42.681682 , -89.020736], {icon: NeighborhoodPark}).addTo(map).bindPopup(CRT);
L.marker([42.705405 , -88.976941], {icon: NeighborhoodPark}).addTo(map).bindPopup(EXC);
L.marker([42.674282 , -89.023115], {icon: NeighborhoodPark}).addTo(map).bindPopup(FRW);
L.marker([42.680723 , -88.97795], {icon: NeighborhoodPark}).addTo(map).bindPopup(HMP);
L.marker([42.738579 , -89.008226], {icon: NeighborhoodPark}).addTo(map).bindPopup(HAR);
L.marker([42.697091 , -88.99783], {icon: NeighborhoodPark}).addTo(map).bindPopup(HAW);
L.marker([42.715717 , -89.003742], {icon: NeighborhoodPark}).addTo(map).bindPopup(HOL);
L.marker([42.687758 , -88.991446], {icon: NeighborhoodPark}).addTo(map).bindPopup(HUR);
L.marker([42.681874 , -89.015801], {icon: NeighborhoodPark}).addTo(map).bindPopup(JEF);
L.marker([42.66979 , -89.013762], {icon: NeighborhoodPark}).addTo(map).bindPopup(JFS);
L.marker([42.632139 , -89.070565], {icon: NeighborhoodPark}).addTo(map).bindPopup(LOC);
L.marker([42.703213 , -88.986554], {icon: NeighborhoodPark}).addTo(map).bindPopup(MAN);
L.marker([42.662445 , -89.028268], {icon: NeighborhoodPark}).addTo(map).bindPopup(MAR);
L.marker([42.695076 , -88.959882], {icon: NeighborhoodPark}).addTo(map).bindPopup(NAN);
L.marker([ 42.68624 , -89.014192], {icon: NeighborhoodPark}).addTo(map).bindPopup(PAR);
L.marker([42.670239 , -89.053459], {icon: NeighborhoodPark}).addTo(map).bindPopup(PCE);
L.marker([42.654169 , -89.052665], {icon: NeighborhoodPark}).addTo(map).bindPopup(PER);
L.marker([42.695297 , -89.018269], {icon: NeighborhoodPark}).addTo(map).bindPopup(PRA);
L.marker([42.685234 , -88.995137], {icon: NeighborhoodPark}).addTo(map).bindPopup(RUG);
L.marker([42.658636, -89.044533], {icon: NeighborhoodPark}).addTo(map).bindPopup(RUS);
L.marker([42.698293 , -89.048996], {icon: NeighborhoodPark}).addTo(map).bindPopup(SHE);
L.marker([42.647698 , -89.036014], {icon: NeighborhoodPark}).addTo(map).bindPopup(SOU);
L.marker([42.646104 , -89.0573], {icon: NeighborhoodPark}).addTo(map).bindPopup(VAL);
L.marker([42.676202 , -89.010329], {icon: NeighborhoodPark}).addTo(map).bindPopup(VIS);
L.marker([42.684714 , -89.03404], {icon: NeighborhoodPark}).addTo(map).bindPopup(FAL);
L.marker([42.682865 , -89.05907], {icon: NeighborhoodPark}).addTo(map).bindPopup(WAV);
L.marker([42.733189 , -88.979945], {icon: NeighborhoodPark}).addTo(map).bindPopup(WOD);
L.marker([42.706209 , -89.013934], {icon: NeighborhoodPark}).addTo(map).bindPopup(ZON);


//below code actually works, template!

//var RIVER = document.createElement('DIV')
//RIV.innerHTML = '<img src ="images/Riverside.png"/>';

//var ROCK = document.createElement('DIV')
//ROC.innerHTML = '<img src = "images/Rockport.png"/>';

//var BOND = document.createElement('DIV')
//BON.innerHTML = '<img src = "images/Bond.png"/>';

//L.marker([ x , y], {icon: RegionalPark}).addTo(map).bindPopup( park );

//var greenIcon = new ParkIcon({iconUrl: 'park-reg-small.png'}),
//    redIcon = new ParkIcon({iconUrl: 'leaf-red.png'}),
//    orangeIcon = new ParkIcon({iconUrl: 'leaf-orange.png'});

//var divNode = document.createElement('DIV')
//divNode.innerHTML = '<img src="images/Palmer.png"/>';

//L.marker([42.676984, -88.992648], {icon: RegionalPark}).addTo(map).bindPopup(divNode);
//L.marker([42.72, -89.01], {icon: greenIcon}).addTo(map).bindPopup(divNode);



  // if you are not doing solution 3 then delete this line down to where the < /script > is, but don't delete the script tag!
  //marker1.bindPopup( "<img src=" + icon_url + "/> Current temperature in " + location + " is: " + temp_f)
//
  /*  delete this line if you are doing solution 3
  // now add a geoJson of your csv points as a variable 
  // open your csv in a simple text editor (such as sublime or textWrangler), copy every thing. Then in a browser go to http://togeojson.com and paste in your csv data.  It will zzthen create a geoJson of your csv that you can copy and paste into this html.

  
  // Add var markers = to geoJson that you pasted in.
  // Then delete {"type";"FeatureCollection,"features": then so that after the var markers = starts with [{"type"
  //at the end of your geoJson delete the last } and add a ;
  var markers=[{"type":"Feature","geometry":{"type":"Point","coordinates":["-89.326136","43.083621"]},"properties":{"Category":"Boat Launch","Name":"Olbrich Park","Description":"Description.... "}},{"type":"Feature","geometry":{"type":"Point","coordinates":["-89.375916","43.125129"]},"properties":{"Category":"Boat Launch","Name":"Warner Park","Description":"Description.... "}},{"type":"Feature","geometry":{"type":"Point","coordinates":["-89.433558","43.130201"]},"properties":{"Category":"Boat Launch","Name":"Govenor Nelson","Description":"Description.... "}},{"type":"Feature","geometry":{"type":"Point","coordinates":["-89.307073","43.006885"]},"properties":{"Category":"Boat Launch","Name":"Babcock Park","Description":"Description.... "}},{"type":"Feature","geometry":{"type":"Point","coordinates":["-89.454053","43.079194"]},"properties":{"Category":"Golf Course","Name":"Blackhawk","Description":"Description.... "}},{"type":"Feature","geometry":{"type":"Point","coordinates":["-89.437797","43.060955"]},"properties":{"Category":"Golf Course","Name":"Glenway","Description":"Description.... "}},{"type":"Feature","geometry":{"type":"Point","coordinates":["-89.455847","43.048465"]},"properties":{"Category":"Golf Course","Name":"Odana Hills","Description":"Description.... "}},{"type":"Feature","geometry":{"type":"Point","coordinates":["-89.415539","43.089717"]},"properties":{"Category":"Picnic Area","Name":"Picnic Point","Description":"Description.... "}},{"type":"Feature","geometry":{"type":"Point","coordinates":["-89.413971","43.058933"]},"properties":{"Category":"Picnic Area","Name":"Vilas Park","Description":"Description.... "}},{"type":"Feature","geometry":{"type":"Point","coordinates":["-89.397856","43.063327"]},"properties":{"Category":"Picnic Area","Name":"Brittingham Park","Description":"Description.... "}},{"type":"Feature","geometry":{"type":"Point","coordinates":["-89.38358","43.081096"]},"properties":{"Category":"Picnic Area","Name":"James Madison Park","Description":"Description.... "}}];

  //copy and past this
  // the radius is how big the invisible circle is to make it larger increase the number to give a bigger clicking area
  var style = {
    radius: 15,
    color: "#000",
    weight: 1,
    opacity: .8,
    fillOpacity: 0.0
  };

  L.geoJson(markers,{
   pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, style);
      },
      onEachFeature: onEachFeature
  }).addTo(map);

// change the .Name to match the column in your CSV the same goes for description
  function onEachFeature (feature, layer){
    var popUpInfo = "<p style='font-family:arial;color:blue;font-size:18px;''> Location: "+ layer.feature.properties.Name+ "</p>"+ layer.feature.properties.Description;

    if(feature.properties && feature.properties.popUpInfo){
      popUpInfo += feature.properties.popUpInfo;
    }
    layer.bindPopup(popUpInfo);
  }
*/  //take out this line if you are doing solution 3

// possible solution 1 - 