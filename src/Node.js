const express = require('express')
const app = express()

const aoEnviarForm = require('./App')

app.get('/', (req) => {

    let dados = req.query.dados

})

app.listen(3000, () => {

    let data = new Date()
    console.log(`Servidor node iniciado em ${data}`)

})