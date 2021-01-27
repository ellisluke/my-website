// import express from 'express';
// import path from 'path';
// IBM API KEY: 9pIqLd0dit7_aTAFwf4_IThwYyRsqr1Jeb128p1sEC_h

/* Hosting commands
cd into my-website
!!!!!! ONE TIME SETUP: curl -sL https://ibm.biz/idt-installer | bash

ibmcloud login -a cloud.ibm.com -r us-south -g Default
ibmcloud ks cluster config --cluster c08gnvjd0hakn5e3nb10
kubectl config current-context

HEROKU PUSH CHANGES: git push https://git.heroku.com/ellis-website.git master
*/

const express = require('express');
const { dirname } = require('path');
const path = require('path');

const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'construction.html'));
});

app.get("/index", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// Set static folder
app.use(express.static(path.join(__dirname, 'public'))); 



app.listen(port, () => console.log("Listening on port " + port));