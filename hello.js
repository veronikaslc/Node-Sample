var express=require('express'); 
var app=express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('default');
});

app.get('/me', function(req, res){
    res.send('<H1>Hello ME</H1> Express');
});

app.get('/who/:name?/:title?', function(req, res){

var name=req.params.name;

var title=req.params.title;
    res.send(name + ' was here ---' + title + ' title');
});

app.get('*', function(req, res){
    res.send('Bad rout');
});

var server=app.listen(3000, function() {

console.log("going to the port 3000");

});