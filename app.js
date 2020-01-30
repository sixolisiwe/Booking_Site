

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
app.get('/Acc_Type', function(req, res){//route name
    res.render('Acc_Type1')//file type
})
 app.post('/submission',function(req,res){//form action on html
     res.redirect('/Acc_Type')
 })
 app.get('/BnbBookings', function(req, res){//route name
     res.render('Bnb')//file to display
 })
 app.post('/Acc_Type', function(req, res){
     res.redirect('/BnbBookings')
 })
 app.get('/Bnb', function(req,res){
     res.redirect('/BnbBookings')
 })
 app.get('/SelfCat', function(req, res){//route name
    res.render('selfAcc')//file to display
})
app.post('/Acc_Type', function(req, res){
    res.redirect('/SelfCat')
})
app.get('/Bnb', function(req,res){
    res.redirect('/BnbBookings')
})

app.get('/Camping', function(req, res){//route name
    res.render('Camp')//file to display
})
app.post('/Acc_Type', function(req, res){
    res.redirect('/Camping')
})
app.get('/Bnb', function(req,res){
    res.redirect('/Camping')
})

app.get('/BookMe', function(req, res){
    res.render('booked')

})
app.post('/book', function(req, res){
    res.redirect('/BookMe')
})
 const PORT = process.env.PORT || 3002
app.listen(PORT, function () {
    console.log("App listening at port:", PORT);

})