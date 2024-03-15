const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');
require("./config/passport");

// Database
require('./config/db.js');

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret: 'nicolas',
  resave: false,
  saveUninitialized: false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  app.locals.mensaje = req.flash('mensaje');
  app.locals.mensaje2 = req.flash('mensaje2');
  app.locals.mensaje3 = req.flash('mensaje3');
  app.locals.user = req.user || null;
  next();
});

// Routes
const routes = require("./routes/index.routes");
app.use(routes);

// Static
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set("views", "public/views");

// Home Route
app.get("/", (req, res) => {
  if (req.isAuthenticated()) {
    res.render("index");
  } else {
    res.redirect("/login");
  }
});

// Server
app.listen(port, () => {
  console.log(`Servidor en puerto ${port}`);
});