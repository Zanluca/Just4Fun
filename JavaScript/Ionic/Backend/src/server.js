const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

server.listen(3000, () => {
    console.log('server started 🎇')
})

let message = []

io.on('connection', socket => {
    console.log(`Socket conenctado ${socket.id}`)

    socket.emit('previousMessage', message)

    socket.on('sendMessage', data => {
        message.push(data)
        socket.broadcast.emit('reciveMessage', data)
    })
})

app.use(cors())