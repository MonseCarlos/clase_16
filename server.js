const express = require ('express')
const serveStatic = require ('serve-static')
const path = require('path')
const app = express()

const serveMiddleware = serveStatic(path.resolve( __dirname,'static'))

function myFirstMiddleware(request,response,next){
    console.log("Soy un Milddleware bebe")
    next()
}

function stopMiddleware(request,response,next){
    response.send('<h1> Nel <h1>')
}

function rootHandler(request, response){
    response.set('Content-Type', 'text/plain')
    response.status(201)
    response.send('<h1>Hello Word<h1>')
}

function serchHandler(request,response){
    response.send(request.query.q)
}

app.use('/assets',serveMiddleware)
//app.use(stopMiddleware)
//app.use(myFirstMiddleware)
app.all('/',rootHandler)

app.get('/search',serchHandler)


app.listen(9000)