var GeoJSON = require('geojson');

var geocoderProvider = 'google';
var httpAdapter = 'http';
var extra = {};

var address = process.argv[2];

var geocoder = require('node-geocoder').getGeocoder(geocoderProvider, httpAdapter, extra);

geocoder.geocode(address)
  .then(function(res) {
    lat = res[0]['latitude'];
    lon = res[0]['longitude'];

    GeoJSON.parse([{lat: lat, lng: lon}],
                {Point: ['lat', 'lng']},
                function(geojson) { console.log(JSON.stringify(geojson)); });

  }, function(err) {
    console.log(err);
  });

