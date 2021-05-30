const http = require('http');

const server = http.createServer((req, res) =>{
    console.log(req.url , req.method)

    // res.setHeader('Content-Type', 'text/plain')
    // res.write('Hello Nodejs')
    // res.end()

    res.setHeader('Content-Type', 'text/html')
    res.write('<head><link rel="stylesheet" href="#"></head>')
    res.write('<h1>Hello Node </h1>')
    res.write('<h1>Hello Node Again</h1>')
    res.end()
})

server.listen(3000 , 'localhost' , () => {
    console.log('Listening on localhost:3000')
})