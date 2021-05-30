const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) =>{
   
    //Set Header Content Type
    res.setHeader('Content-Type', 'text/html')

    //Send HTML file
    fs.readFile('./views/index.html', (err, data) => {
        if(err){
            console.log(err)
            res.end()
        }else {
            // res.write(data)
            res.end(data)
        }
    })
})

server.listen(3000 , 'localhost' , () => {
    console.log('Listening on localhost:3000')
})