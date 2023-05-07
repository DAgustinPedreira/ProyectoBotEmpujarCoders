const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


const usuarioSchema = new mongoose.Schema({
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
    
},
{
    timestamps: true
}
);

usuarioSchema.methods.encryptPassword = async password =>{
   const salt = await bcrypt.genSalt(10);
   return await bcrypt.hash(password, salt);
};

usuarioSchema.methods.matchPassword = async function(password) {
   return await bcrypt.compare(password, this.contraseña)
};

const Usuario = mongoose.model("usuario", usuarioSchema);

module.exports = Usuario