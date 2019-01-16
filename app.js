const path = require("path");
const myConfig = require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser");
const sequelize = require('./models/initSequelize');
// okta login 1
const session = require('express-session');

const app = express();

// init template engine
app.set("view engine", "ejs");
app.set("views", "views");
// init routes
const oidc = require('./util/oidc.js');
const yachtRoutes = require("./routes/yacht");
// init body parser
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}));
// ExpressOIDC will attach handlers for the /login and /authorization-code/callback routes
app.use(oidc.router);
app.get('/xx', (req, res) => {
    if (req.userContext) {
        console.log(req.userContext);
        res.send(`Hello ${req.userContext.userinfo.name}! <a href="logout">Logout</a>`);
    } else {
        res.send('Please <a href="/login">login</a>');
    }
});
// public documents & routes
app.use(express.static(path.join(__dirname, "public")));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
// app use
app.use(yachtRoutes);

app.get('/logout', (req, res, next) => {
    req.logout();
    res.redirect('/');
});

app.listen(process.env.PORT || 3000);