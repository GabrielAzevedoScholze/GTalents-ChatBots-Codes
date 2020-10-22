const { request, response } = require('express');
const express = require('express')
const app = express()

app.get('/', (request, response) => {
    console.log("teste get")

    /*if (true){

        console.log(request)
    }*/

response.send('Olá mundo!!') 
})



app.post('/', (request, response)=>{
    
    console.log("testando o post")
    
    response. send('retorno do post')

})
 var port = 4200
console.log("olá mundo dos testes")
app.listen(process.env.PORT || port)
console.log("escutando na porta: " + port)