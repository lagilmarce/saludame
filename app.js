const express = require('express')
const app = express()

app.get('/makers/:nombre',(req,res)=> {
    let nombre = req.params.nombre;
    let capNombre = nombre.charAt(0).toUpperCase() + nombre.slice(1);
    if (nombre === undefined){
        nombre = 'desconocido'
    }
    res.send(`<h1>Hola ${capNombre}!</h1>`)
})



app.listen(3000,()=> console.log('listening in port 3000'))