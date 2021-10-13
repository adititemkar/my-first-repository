// const http = require('http')
// const fs = require('fs')
// const path = require('path')

//console.log(http)

//const server = http.createServer((req, res) => {
//console.log(req.url)
// console.log(req.headers)
//console.log(req.method)
//const path = req.url
//const markup = fs.readFileSync(path.resolve('./index.html'))
//     const { url } = req
//     if (url == '/login') {
//         res.write('<h1>LOGIN</h1>')
//         res.end()
//     }
//     if (url == '/signup') {
//         res.write('<h1>SIGNUP</h1>')
//         res.end()
//     }
// })
// console.log(server)
// server.listen(3000, () => {
//     console.log(`server listening at port: ${3000}`)
// })
const data = [{ name: "aditi" }, { name: "sakshi" }, { name: "ramu" }]
const express = require('express')
const app = express()

app.get('/getnames', (req, res) => {

        res.send(data)
    })
    // app.get('/signup', (req, res) => {

//     res.send('this is response signup')
// })

app.listen(3000, () => {
    console.log("server listning port 3000")
})