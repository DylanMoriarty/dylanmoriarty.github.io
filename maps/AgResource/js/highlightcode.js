// Default map
var map = L.map('map', {
    'center': [0, 0],
    'zoom': 0,
    'layers': [
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            'attribution': 'Map data &copy; OpenStreetMap contributors'
        })
    ]
});

// Custom icon class without iconUrl
var customIcon = L.Icon.extend({
    options: {
        shadowUrl: 'http://leafletjs.com/docs/images/leaf-shadow.png',
        iconSize:     [38, 95],
        shadowSize:   [50, 64],
        iconAnchor:   [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor:  [-3, -76]
    }
});

// Some positions for creating markers
var positions = [
    [0, 120],
    [0, 60],
    [0, 0],
    [0, -60],
    [0, -120]
];

// Function for getting new default icon
function getDefaultIcon () {
    return new customIcon({
        iconUrl: 'http://leafletjs.com/docs/images/leaf-green.png'
    });
}

// Function for getting new highlight icon
function getHighlightIcon () {
    return new customIcon({
        iconUrl: 'http://leafletjs.com/docs/images/leaf-red.png'
    });
}

// Variable to keep track of highlighted marker
var highlight = null;

// Function for removing highlight 
function removeHighlight () {
    // Check for highlight
    if (highlight !== null) {
        // Set default icon
        highlight.setIcon(getDefaultIcon());
        // Unset highlight
        highlight = null;
      }
}

// Loop over positions
positions.forEach(function (position) {

    // Create new marker
    var marker = L.marker(position, {
        // Set default icon
        icon: getDefaultIcon()
    })

    // Marker click
    marker.on('click', function () {
        // Remove highlight
        removeHighlight();
        // Set highlight icon
        marker.setIcon(getHighlightIcon());
        // Assign highlight
        highlight = marker;
    });

    // Add marker to map;
    marker.addTo(map);

});

// Add map click handler, remove highlight
map.on('click', removeHighlight);