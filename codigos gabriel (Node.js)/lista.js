const { request, response } = require('express');
const express = require('express')
const app = express()

var numeroUrl = ['13','16','19','23','27','39','43']

// get
app.get('/', (request, response) => {
   
    console.log('A lista é composta dos seguintes números: ' + numeroUrl, '\n') // resposta no Git(server)
    
    response.send('Números da lista: ' + numeroUrl) // Resposta no Postman 
})

// post
//var numAdiçãoList =  ['13','16','19','23','27','39','43']    
var numAdiçãoList = ('51')
app.post('/', (request, response) => {

    console.log('Número adicionado à lista: ' + numAdiçãoList) // resposta no Git(server)
        numeroUrl.push(numAdiçãoList)

        response.send('Números da lista: ' + numeroUrl) // Resposta no Postman 

})

var port = 4200

console.log("Conectando ao servidor...")
app.listen(process.env.PORT || port)
console.log("escutando na porta: " + port)