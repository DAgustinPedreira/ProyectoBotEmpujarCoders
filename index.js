const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
const passport=require('passport')
const session = require('express-session')
const flash=require('connect-flash')



//cambiado de 3000 a 27017







//Database
require('./config/db.js');


//Mi
app.use(express.urlencoded({extended:false}))
app.use(session({
  secret:'nicolas',
  resave:false,
  saveUninitialized:false
}))
app.use(flash())
app.use(passport.initialize())
app.use(passport.session())


app.use((req,res,next)=>{
  app.locals.mensaje=req.flash('mensaje')
  app.locals.mensaje2=req.flash('mensaje2')
  app.locals.mensaje3=req.flash('mensaje3')
  app.locals.user=req.user||null
  next()
})


//Rutas

const routes = require("./routes/index.routes")
app.use(routes)

//Static
app.use(express.static(__dirname + '/public'));
app.use(express.static('views'))




//Servidor
app.listen(port, () => {
  console.log(`Servidor en puerto ${port}`);
});

