const express = require('express');
const port = 9000;

let app = express();

app.listen(port, function(err){
    if(err){
        console.log(`Error while creating the server`)
    }
    console.log(`Server is running on the port ${port}`);
})