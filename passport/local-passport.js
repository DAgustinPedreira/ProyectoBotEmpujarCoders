const { model } = require('mongoose')
const passport=require('passport')
const usuarios = require('../models/usuarios')
const LocalStrategy=require('passport-local').Strategy
const bcrypt=require('bcryptjs')

const User=require('../models/usuarios')

const encrypt= async (textPlain) =>{
    const hash=await bcrypt.hash(textPlain,10)
    return hash
}

const compare= async (contraseña,hashContraseña) =>{
    return await bcrypt.compare(contraseña,hashContraseña)
}



passport.use('local-/register',new LocalStrategy({
    usernameField:'usuario',
    passwordField:'contraseña',
    passReqToCallback:true
},async (req,usuario,contraseña,done)=>{
     let paswordHash=await encrypt(contraseña)
     const user=User.findOne({usuario:usuario},(err,user)=>{
        
        if (user) {
            done(null,false,req.flash('mensaje', 'El Usuario ya esta registrado'))
        }
        else{
            const usuarios=new User()
            usuarios.usuario=usuario
            usuarios.contraseña=paswordHash
            usuarios.save()
                .then(usuario=>{
                    done(null,usuario)
                })
        }
    })
}))


passport.use('local-/login',new LocalStrategy({
    usernameField:'usuario',
    passwordField:'contraseña',
    passReqToCallback:true
},async(req,usuarios,contraseña,done)=>{  

    const user= User.findOne({usuario:usuarios},async (err,user)=>{
        let checkPassword=await compare(contraseña,user.contraseña)
        
        if (!user) {
            done(null,false,req.flash('mensaje2', 'El Usuario no esta registrado'))
        }
        else{
            
                if (!checkPassword) {
                    done(null,false,req.flash('mensaje3', 'contraseña incorrecta '))
                }

                else if(checkPassword){
                    
                    done(null,user)
                }
           
        }
    })
}))

passport.serializeUser((usuario,done)=>{
    done(null,usuario.id)
})

passport.deserializeUser((id,done)=>{
    User.findById(id)
        .then(usuarios=>{
            done(null,usuarios)
        })
})


