var geojson =


{
   yadda yadda GEOJSON
    }],
    "crs": {
        "type": "name",
        "properties": {
            "name": "urn:ogc:def:crs:EPSG::4326"
        }
    },
    "bbox": [-136.0000000810684, 45.000000195029365, -56.00000009220471, 70.00000729526616]
};

var map = L.map('map').setView([56.863177, -108.584921], 4);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);

geojsonLayer = L.geoJson(geojson, {
    style: function (feature) {
        return {
            color: "red"
        };
    },
    pointToLayer: function (feature, latlng) {
        return new L.CircleMarker(latlng, {
            radius: 5,
            fillOpacity: 0.85
        });
    },
    onEachFeature: function (feature, layer) {
        //layer.bindPopup(feature.properties.GPSUserName);

        layer.on('click', function (e) {
         
            var selectedfarm = feature.properties.name;

            console.log(selectedfarm);

            document.getElementById("info").innerHTML = "woo woo" + feature.properties.name;
            $("#feature_infos").stop();
            $("#feature_infos").fadeIn("fast");


            $("#feature_infos").fadeOut(5000);
            // This is your click handler. 
            // Your feature is available here as e.target, and the 
            //featureInfo object we added is available as e.target.featureInfo 
        });
    }
});

map.addLayer(geojsonLayer);