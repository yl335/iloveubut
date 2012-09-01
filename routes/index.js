
/*
 * GET home page.
 */
 var pg = require('pg')
   , DATABASE_URL = process.env.DATABASE_URL || "postgres://swallowlink@localhost/iloveubut"
   , SITE_NAME = 'I Love U But';

exports.index = function(req, res) {
	res.render('index', { title: SITE_NAME });
};

exports.post = function(req, res) {
	var post = req.body.reason;

	pg.connect(DATABASE_URL, function(err, client) {
		//INSERT POST
		var query = client.query('INSERT INTO but VALUES ($1)', [post]);

		//VERIFY POST
		var query = client.query('SELECT * FROM but');
		query.on('row', function(row) {
			console.log(JSON.stringify(row));
		});

		query.on('end', function() {
			client.end();
		});
	});

	res.send(200);
}

exports.posts = function(req, res) {
	console.log("RANDOM POSTS");
	pg.connect(DATABASE_URL, function(err, client) {
		//INSERT POST
		var query = client.query('SELECT * FROM but OFFSET RANDOM() * (SELECT count(*) FROM but) LIMIT 1');

		//VERIFY POST
		query.on('row', function(row) {
			console.log(JSON.stringify(row));
			res.json(200, row.reason);
		});
	});
}

exports.about = function(req, res) {
	res.render('about', {title: SITE_NAME})
}