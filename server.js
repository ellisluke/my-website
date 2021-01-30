// import express from 'express';
// import path from 'path';
// IBM API KEY: 9pIqLd0dit7_aTAFwf4_IThwYyRsqr1Jeb128p1sEC_h

/* Hosting commands

HEROKU PUSH CHANGES: git push https://git.heroku.com/ellis-website.git master
*/

const express = require('express');
const { dirname } = require('path');
const path = require('path');
const layouts = require('express-ejs-layouts');

const app = express();
const port = process.env.PORT || 8000;

app.use(layouts);

// Set static folder
app.use(express.static(path.join(__dirname, 'public'))); 

// Set views folder
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');


// ROUTES
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'construction.html'));
    // res.render('index');
})

app.get('/index', (req, res) => {
    res.render('index');
});

app.get('/projects', (req, res) => {
    res.render('projects');
});

app.get('/videos', (req, res) => {
    res.render('videos');
});

app.get('/music', (req, res) => {
    res.render('music');
});






app.listen(port, () => console.log("Listening on port " + port));