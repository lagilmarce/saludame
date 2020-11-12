const express = require('express')
const app = express()

app.get('/',(req,res)=> {
    const nombre = req.query.nombre;
    res.send(`<h1>Hola ${nombre}!</h1>`)
})


app.listen(3000,()=> console.log('listening in port 3000'))