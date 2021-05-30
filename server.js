const http = require('http');

const server = http.createServer((req, res) =>{
    console.log("Response sent to Client")
})

server.listen(3000 , 'localhost' , () => {
    console.log('Listening on localhost:3000')
})