

const express = require('express');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser')
var session = require('express-session');
var app = express();
 
app.engine('handlebars', exphbs());

app.set('view engine', 'handlebars'); //configure handlebars

app.use(session({
    secret: "enter here",
    resave: false,
    saveUninitialized: true
}));


app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json()) //config as per line13

app.use(express.static('public'));
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
 const PORT = process.env.PORT || 3002
app.listen(PORT, function () {
    console.log("App listening at port:", PORT);

})