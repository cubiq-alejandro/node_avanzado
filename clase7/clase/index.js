const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const loki = require('lokijs')
const server = express()

let userCollection;

const db = new loki("users.json",{
    autoload: true,
    autoloadCallback: function(){
        userCollection = db.getCollection("users")
        if(userCollection === null) userCollection = db.addCollection("users")
    },
    autosave: true,
    autosaveInterval: 3000
});

server.set('appName','App de usuarios')
server.set('appPort',8080)
server.set('view engine','ejs')

server.use(bodyParser.json())
server.use(bodyParser.urlencoded( {extended: true} ))
server.use(morgan('combined'))

server.get('/',(request,response) =>{
    let users = userCollection.chain().data()
    response.render('index.ejs',{
        users
    })
})

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
    let body = request.body
    let user = {
        name: body.name || '',
        lastname: body.lastname || '',
        email: ((body.email) ? body.email : ''),
        birthdate: body.birthdate || ''
    }
    userCollection.insert(user)
    response.send(user)
})

server.delete('/users/:id',(request,response) => {
    let userId = request.params.id
    let user = userCollection.get(userId)
    user && userCollection.remove(user)
    response.send(user)
})

server.use(express.static('public'))

server.listen(server.get('appPort'), () => {
    console.log('Server running',server.get('appName'))
})
