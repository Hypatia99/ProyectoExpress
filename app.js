var express=require('express');
var app=express();

app.get ('/', function(req, res) {
    res.send ('Hola Mundo!');
});

app.listen(3000, function(){
    console.log('Una API desde express')
});
app.listen(3000, function(){
    console.log('Hola desde la API')
});
app.listen(3000, function(){
    console.log('Adios desde una API ')
});