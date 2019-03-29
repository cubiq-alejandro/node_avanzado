const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const loki = require('lokijs')
const server = express()

const db = new loki();
let userCollection = db.addCollection("users")

const logger = (req,res,next) =>{
    console.log(`Requested url: ${req.protocol}://${req.get('host')}${req.originalUrl}`)
    next()    
}

server.use(bodyParser.json())
server.use(bodyParser.urlencoded( {extended: true} ))
server.use(morgan('combined'))

/*server.all('/users',(request,response,next) => {
    console.log('Requested')
    next()
})*/

server.get('/users',(request,response) => {
    let users = userCollection.chain().data()
    response.send(users)
})

server.get('/users/:id',(request,response) => {
    let userId = request.params.id
    let user = userCollection.get(userId)
    response.send(user)
})

server.put('/users',(request,response) => {
    //let userId = request.params.id
    let body = request.body

    let user = {
        name: body.name || '',
        lastname: body.lastname || '',
        email: ((body.email) ? body.email : ''),
        age: body.age || ''
    }
    userCollection.insert(user)
    response.send(user)
})

server.delete('/users/:id',(request,response) => {
    let userId = request.params.id
    response.send(`<h1>User Id </h1>`)
})

server.listen(8080, () => {
    console.log('Server running')
})
