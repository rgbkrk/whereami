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

// Writes GeoJSON out to the pointFile
var writeGeoJSON = function(geojson) {
  var geostring = JSON.stringify(geojson);
  console.log("GeoJSON being written: ");
  console.log(geostring + "\n");

  fs.writeFile(pointFile, geostring, function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("Point file saved!");
    }
  });
};

// Workhorse
// Address->GeoJSON->pointFile
geocoder.geocode(address)
  .then(function(res) {

    GeoJSON.parse(res,
                {Point: ['latitude', 'longitude']},
                writeGeoJSON);

  }, function(err) {
    console.log(err);
  });

