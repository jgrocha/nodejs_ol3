var express = require('express');
var router = express.Router();
var postgeo = require("postgeo");
var pg = require("pg");

var conString = "postgres://geobox:geobox@localhost/infprevia";

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET map page. */
router.get('/map', function(req, res) {
    var client = new pg.Client(conString);
    client.connect();
    var query = client.query("SELECT lname FROM geo_layers");
    query.on("row", function (row, result) {
        result.addRow(row);
    });

    query.on("end", function (result) {
        res.render('map', {
            layers: (result.rows),
            title: 'denelius.com',
            lat: 40.7795213,
            lng: -73.9641241
        });
    });
});

/* GET pg json data. */
router.get('/layers', function (req, res) {
    var client = new pg.Client(conString);
    client.connect();
    var query = client.query("SELECT lname FROM geo_layers");
    query.on("row", function (row, result) {
        result.addRow(row);
    });

    query.on("end", function (result) {
        res.send(result.rows);
        res.end();
    });
});

/* GET pg json data. */
router.get('/pg/:name', function (req, res) {
    if (req.params.name) {  
        var client = new pg.Client(conString);
        client.connect();         

        var query = client.query("SELECT row_to_json(fc) " 
            + "FROM ( SELECT 'FeatureCollection' As type, array_to_json(array_agg(f)) As features "
            + "FROM (SELECT 'Feature' As type "
                + ", ST_AsGeoJSON(lg.the_geom)::json As geometry "
                + ", row_to_json(lp) As properties "
                + "FROM geo_layers As lg "
                    + "INNER JOIN (SELECT gid, lname FROM geo_layers where lname = $1) As lp "
                    + "ON lg.gid = lp.gid  ) As f )  As fc", [req.params.name]); 
        query.on("row", function (row, result) {
            result.addRow(row);
        });
        query.on("end", function (result) {
            res.send(result.rows[0].row_to_json);
            res.end();
        });
    } else {
        res.status(404)        // HTTP status 404: NotFound
        .send('Not found');
    }
});

module.exports = router;

