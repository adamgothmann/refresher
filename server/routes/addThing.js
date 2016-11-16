var express = require('express');
var path = require('path');
var pg = require('pg');

var connection = require('../modules/connection');
var router = express.Router();

router.post('/', function(req, res){
  console.log('route', req.body.thing);
  pg.connect(connection, function(err, client, done){
    var query = client.query('INSERT into test (main) VALUES ($1)', [req.body.thing]);

    if(err){
      console.log(err);
    }
  });
});

router.get('/', function(req, res){
  console.log('in GET');
  pg.connect(connection, function(err, client, done){
    var results = [];
    var query = client.query('SELECT * from test');
    query.on('row', function(row){
      results.push(row);
    });
    query.on('end', function(){
      done();
      res.send(results);
    });
    console.log('results', results);
  });
});

module.exports = router;
