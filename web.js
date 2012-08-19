var express = require('express');
var pg = require('pg');

var app = express.createServer(express.logger());

//database
var client = new pg.Client(process.env.DATABASE_URL);
client.connect();

/*
var query = client.query('SELECT * FROM weather');
query.on('row', function(row) {
	console.log(row);
	console.log("City: %s", row.city);
	console.log("Date: %tc/%Tc\n", row.date);
});
*/
/*
query.on('end', function() { 
  client.end();
});
*/

/*
pg.connect(process.env.DATABASE_URL, function(err, client) {
  var query = client.query('SELECT * FROM your_table');

  query.on('row', function(row) {
    console.log(JSON.stringify(row));
  });
});
*/

app.get('/', function(request, response) {
	pg.connect();
  response.send('Hello World!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});