//console.log("Hello World"); 
// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => res.render(Travel.handlebars))

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const express = require('express');
const exphbs  = require('express-handlebars');
 
var app = express();
 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {
    res.render('Travel');
});
app.get('/User_Info', function (req, res){
    res.render('form')
})
app.get('/Type', function(req, res){
    res.render('Acc_Type1')
})
 app.post('/submit',function(req,res){
     res.redirect('/Type')
 })
 app.get('/Bookings', function(req, res){//route name
     res.render('Destination')//file to display
 })
 app.post('/Acc_Type', function(req, res){
     res.redirect('/Bookings')
 })
 app.get('/Cpt', function(req,res){
     res.redirect('/Bookings')
 })
app.listen(3002);