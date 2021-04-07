const express = require('express');
const port = 9000;
const path = require('path');

let app = express();

app.set('view engine', 'ejs');
app.set('views', './views');


app.use('/', require('./routes/index'));

app.listen(port, function(err){
    if(err){
        console.log(`Error while creating the server`)
    }
    console.log(`Server is running on the port ${port}`);
})