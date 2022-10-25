const mongoose = require("mongoose");


const usuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    contraseña: {
        type: String,
        required: true,
    }
});

const Usuario = mongoose.model("usuario", usuarioSchema);

module.exports = Usuario 