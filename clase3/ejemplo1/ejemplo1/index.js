const http = require('http')
const url = require('url')
const fs = require('fs')

const server = http.createServer( (request,response) => {    
    const objectUrl = url.parse(request.url)

    let filePath =  `${__dirname}/public${objectUrl.pathname}`

    if(objectUrl.pathname === '/'){
        filePath = `${__dirname}/public/index.html`
    }
    fs.stat(filePath, (error,stats) => {        
        if(error){
            response.writeHead(404,{'Content-type': 'text/html'})
            response.end()
        } else {
            fs.readFile(filePath, (error,content) =>{
                if(error){
                    response.writeHead(500,{'Content-type': 'text/html'})
                    response.end()
                } else {
                    response.writeHead(200,{'Content-type': 'text/html'})
                    response.write(content.toString())
                    response.end() 
                }                
            })        
        }
    })


    /*response.writeHead(200,{'Content-type': 'text/html'})
    response.write(`<h1>Hola </h1>`)
    response.end()*/
})

server.listen(8080, () => {
    console.log("server working")
})