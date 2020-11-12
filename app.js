const express = require('express')
const app = express()

app.get('/makers/:nombre',(req,res)=> {
    let nombre = req.params.nombre;
    if (nombre === undefined){
        nombre = 'desconocido'
    }
    res.send(`<h1>Hola ${nombre}!</h1>`)
})



app.listen(3000,()=> console.log('listening in port 3000'))