var express = require('express')
var myapp = express()
var path = require('path')
const serveStatic = require('serve-static');

myapp.use('/', serveStatic("public"))
// myapp.use(express.static("public"))

myapp.listen(3000, function(){
    console.log('Listening')
})