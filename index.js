const express = require("express");
const app = express();
const port = 3000;

//Static
app.use(express.static(__dirname + '/public'));

//Rutas

const routes = require("./routes/index.routes")
app.use(routes)

//Servidor
app.listen(port, () => {
  console.log(`Servidor en puerto ${port}`);
});

