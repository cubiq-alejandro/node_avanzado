const express = require('express')
const bodyParser = require('body-parser')
const server = express()

server.use(bodyParser.json())
server.use(bodyParser.urlencoded( {extended: true} ))

server.get('/users',(request,response) => {
    response.send('<h1>Users list</h1>')
})

server.get('/users/:id',(request,response) => {
    let userId = request.params.id
    response.send(`<h1>User Id ${userId} </h1>`)
})

server.put('/users',(request,response) => {
    //let userId = request.params.id
    let user = request.body

    // email obligatorio
    // nombre, apellido, email, edad 

    console.log(user)

    response.send(`<h1>User Id </h1>`)
})

server.delete('/users/:id',(request,response) => {
    let userId = request.params.id
    // Numerico 500
    // 404

    response.send(`<h1>User Id </h1>`)
})

server.listen(8080, () => {
    console.log('Server running')
})
