const express = require('express');
const port = 9000;
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const db = require('./config/mongoose')
const cookieParser = require('cookie-parser');

const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo')(session);

let app = express();

app.use(express.urlencoded());
app.use(cookieParser());

app.use(expressLayouts);
app.use(express.static('./assets'));
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.set('view engine', 'ejs');
app.set('views', './views');


app.use(session({
    name : 'allsocial',
    secret: 'blah',
    saveUninitialized : false,
    resave: false,
    cookie:{
        maxAge : 1000*60*1000
    },
    store : new MongoStore(
        {
            mongooseConnection: db,
            autoRemove : 'disabled'
        }
    )
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);


app.use('/', require('./routes/index'));

app.listen(port, function(err){
    if(err){
        console.log(`Error while creating the server`)
    }
    console.log(`Server is running on the port ${port}`);
})