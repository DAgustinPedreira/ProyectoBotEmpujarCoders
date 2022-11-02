const express = require("express")
const router = express.Router()
const path = require("path")

const Usuario = require("../models/Usuario");

//Guardado de Formulario de inicio
router.post("/ejemplo", async (req, res) => {
     
    try { const usuario = new Usuario(req.body);
        await usuario.save();
        res.send(usuario);
    } catch (error) {
       return res.send(error);
    } 
});

// Esto es de prueba ↓↓↓

// router.post("/merengue", async (req, res) =>{
//     const {nombre, email, contraseña } = req.body;
//     res.send(email)
// } )

//Pagina principal
router.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../index.html"));
 })


module.exports = router;