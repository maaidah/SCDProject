/**
 * This is a basic starting point of the assignment
 * Modify the code according to your own needs and requirements
 */

//const express = require('express')
//import express from 'express'; // <-- Module Style import
//import bodyParser from 'body-parser';
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config({path: './.env'});
const port = process.env.PORT || 3001;
app.use(cors());

app.use(express.json());
app.use(require('./routes/stock'));

const dbo = require('./db/conn');

app.listen(port, () => {
    dbo.connectToServer(function (err)
    {if(err) console.error(err)});

    console.log(`Server is running on port: ${port}`);

});