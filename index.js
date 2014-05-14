var GeoJSON = require('geojson');
var geo = require('geo');

var lat = 39.384;
var lng = -75.3;

var address = process.argv[2];

processAddress = function(formattedAddress, latitude, longitude, details) {
  console.log("Formatted Address: " + formattedAddress);
  console.log("Latitude: " + latitude);
  console.log("Longitude: " + longitude);
  console.log("Address details:", details);
        
  GeoJSON.parse([{lat: latitude, lng: longitude}],
                {Point: ['lat', 'lng']},
                function(geojson) { console.log(JSON.stringify(geojson)); });
};



geo.geocoder(geo.google, address, false, processAddress);

