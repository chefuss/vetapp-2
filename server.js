const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');

//debemos definir nuestros controladores y requerirlos.


app.use(express.static('static_files'));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

//mostrar el archivo index.html en el controlador home en la ruta '/'

//acceder al perfil de la mascota especificada mediante ruta '/pet' que recibira como query param el name o el id

//traer todas las mascotas en la ruta '/pets'

//traer todos los dueños registrados en la ruta '/owners'

//acceder al perfil del dueño en la ruta '/owners/:id' y recibe como path param el id del dueño




app.listen(port, (err) => {
  if (err) {
    return console.log('algo ha salido mal ', err);
  }
  console.log('el servidor está corriendo en http://localhost:' + port);
});
