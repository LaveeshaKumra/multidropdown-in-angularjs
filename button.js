var express = require('express');
var routes = require('routes');
var http = require('http');
var url = require('url');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended: true}));
var mysql = require('mysql');

app.set('port',process.env.PORT || 4300);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(express.json());
var con = mysql.createConnection({host:'localhost',user:'root',password:'',database:'dropdown'});
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname, "js")));
app.get('/',function(req,res){
	res.render('index');
});

app.post('/getcountry', function(req, res) {
	var sql="select * from countries";
	con.query(sql,function(err,country){
		res.send(country);
	});
});

app.post('/getstate', function(req, res) {
	var sql="select * from states where Ccode='"+req.body.selectedId1+"'";
	con.query(sql,function(err,state){
		res.send(state);
	});
});
	

app.post('/getcity', function(req, res) {
	var sql="select * from cities where Scode='"+req.body.selectedId2+"'";
	con.query(sql,function(err,city){
		console.log(city);
		res.send(city);
	});
});


http.createServer(app).listen(app.get('port'),function(){
	console.log('Express Server listening on Port '+app.get('port'));
});