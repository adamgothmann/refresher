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

module.exports = router;
