whereami
========

Where am I? Forget foursquare, use Github as a tracker. Git geo diffs!

![Geo diff](https://cloud.githubusercontent.com/assets/836375/2976308/34d31456-db9f-11e3-8946-cd871201a5a9.png)

## Installation

```
git clone https://github.com/rgbkrk/whereami.git
cd whereami
npm install
```

## Usage

`index.js` is just a simple script that turns an address into valid GeoJSON and dumps it in most-recent.geojson.

```
node index.js <address>
```

### Example

```
$ node index.js "1 Fanatical Place, San Antonio, TX"
GeoJSON being written:
{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-98.39537759999999,29.5086621]},"properties":{"country":"United States","city":"San Antonio","state":"Texas","stateCode":"TX","zipcode":"78218","streetName":"Fanatical Place","streetNumber":"1","countryCode":"US"}}]}

Point file saved!
```


To see where I am, check out [the most recent GeoJSON file](most-recent.geojson).

If you fork this, I can be in two places at once!

## TODO

* Represent a (week|day)'s movements using a [LineString](http://geojson.org/geojson-spec.html#linestring).
* Fix point writeout to the most-recent.geojson so geodiffs work on Github :white_check_mark:
* Add annotations to the points :white_check_mark:
