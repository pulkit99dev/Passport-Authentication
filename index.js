const express = require('express');
const port = 9000;
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const db = require('./config/mongoose')
const cookieParser = require('cookie-parser');

let app = express();

app.use(express.urlencoded());
app.use(cookieParser());

app.use(expressLayouts);
app.use(express.static('./assets'));
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.set('view engine', 'ejs');
app.set('views', './views');


app.use('/', require('./routes/index'));

app.listen(port, function(err){
    if(err){
        console.log(`Error while creating the server`)
    }
    console.log(`Server is running on the port ${port}`);
})