const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const num = _.random(1,100)
console.log(num)

const greet = _.once(() => {
    console.log('Greetings!')
})

greet();
greet();

const server = http.createServer((req, res) =>{
   
    //Set Header Content Type
    res.setHeader('Content-Type', 'text/html')

    let path = './views/';
    switch(req.url){
        
        case '/':
           path += 'index.html';
           res.statusCode = 200;
           break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            break;
        default:
            path += '404.html';
            res.statusCode = 404;

    }

    //Send HTML file
    fs.readFile(path, (err, data) => {
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