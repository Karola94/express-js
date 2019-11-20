var express = require('express');
var app = express();

app.use('/store', function(req, res, next){
    console.log('Hej, jestem pośrednikiem przy żądaniu do /store');
    next();
});

app.get('/', function (req, res) {
    console.log('Otrzymałem żądanie GET do strony głównej');    
    res.send('Hello world');
});

app.get('/store', function (req, res) {
    console.log('Otrzymałem żądanie GET do strony /store');    
    res.send('To jest sklep');
});

app.listen(3000);
app.use(function(req, res, next) {
    res.status(404).send('Nie można odnaleźć strony')
});