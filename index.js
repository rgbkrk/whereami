var fs = require('fs');
var GeoJSON = require('geojson');

var geocoderProvider = 'google';
var httpAdapter = 'http';
var extra = {};

var geocoder = require('node-geocoder').getGeocoder(geocoderProvider, httpAdapter, extra);

// For now we're going to record each new address in "most-recent.geojson",
// overwriting the old copy
var pointFile = "most-recent.geojson";

// Get the address from the user
var address = process.argv[2];

var writeGeoJSON = function(geojson) {
  var geostring = JSON.stringify(geojson);
  console.log("GeoJSON being written: ");
  console.log(geostring + "\n");

  fs.writeFile(pointFile, geostring, function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
  });
};

geocoder.geocode(address)
  .then(function(res) {
    lat = res[0]['latitude'];
    lon = res[0]['longitude'];

    GeoJSON.parse(res,
                {Point: ['lat', 'lng']},
                writeGeoJSON);

  }, function(err) {
    console.log(err);
  });

