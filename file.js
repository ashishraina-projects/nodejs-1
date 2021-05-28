const fs = require('fs');

// Reading File
    // fs.readFile('./docs/textfile.txt', (err , data) => {
    //     if(err){
    //         console.log(err)
    //     }
    //     console.log(data.toString())
    // })

    // console.log("last line")


// Writing File
    // fs.writeFile('./docs/textfile2.txt','I am written programatically!', (err , data) => {
    //     if(err){
    //         console.log(err)
    //     }
    //     console.log('File Written')
    // })


// Directories
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) => {
        if(err){
            console.log(err)
        }
        console.log('Folder Created!')
    })
} else {
    fs.rmdir('./assets', (err) =>{
        console.log(err)
    })
    console.log('Folder Deleted!')
}


// Deleting Files

if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err){
            console.log(err)
        }
    })
    console.log('file deleted')
} else {
    console.log('File doesn\'t exists')
}