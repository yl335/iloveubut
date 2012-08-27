/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , pg = require('pg');

var app = express();

//DATABASE
var DATABASE_URL = process.env.DATABASE_URL | "dbname=swallowlink";
pg.connect(DATABASE_URL, function(err, client) {
  var query = client.query('SELECT * FROM weather');

  query.on('row', function(row) {
    console.log(JSON.stringify(row));
  });
  
  query.on('end', function() {
    client.end();
  });
});

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
