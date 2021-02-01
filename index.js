const mongoose = require('mongoose');
const app = require('./app');
const port = 3000;

mongoose.connect( 'mongodb://localhost:27017/eduBIT', { useNewUrlParser: true, useUnifiedTopology: true }, (error, res) => {

    if(error){
        console.log("ERROR DE CONEXION", error);
    } else {
        console.log("CONECTADO CORRECTAMENTE");
        app.listen(port, () => {
            console.log('Escuchando en el puerto', port);
        })
    }

})