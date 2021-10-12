const fs = require('fs')

// fs.readFile('./text.txt', (error, data) => {
//     if (error) console.log(error)
//     else console.log(data.toString())
// })
// console.log(fs.readFileSync('./text.txt', 'utf8'))
// console.log('i am a random')
fs.writeFile('./text.txt', "hello", (error) => {
    if (error) console.log(error)
        //else console.log(data.toString())
})