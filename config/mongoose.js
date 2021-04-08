const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/allsocial', {useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(`Error in linking db`));

db.once('open', function(err, user){
    if(err){
        console.log(`Not connected`);
    }
    console.log('Connected to db');
})

module.exports = db;