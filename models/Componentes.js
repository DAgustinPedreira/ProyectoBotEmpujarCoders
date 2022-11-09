const mongoose = require("mongoose");


const componenteSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    precio: {
        type: Number,
        required: true,
        trim: true,
        unique: true,
    },
    Stock: {
        type: String,
        required: true,
    }
});

const componente = mongoose.model("componentes", componenteSchema);

module.exports = componente