require('dotenv').config()
const { default: axios } = require('axios')
const express = require('express')
const app = express()
const cors = require('cors')
const { WebSocketServer } = require('ws') 

app.use(cors({ origin: 'http://localhost:5173'}))

const wss = new WebSocketServer({ port: 8080 })
const clients = new Set()

setInterval(() => {
  clients.forEach(client => {
    client.send(JSON.stringify({ message: 'ping', time: new Date().toISOString() }))
  })
}, 3000)

wss.on('connection', (socket) => {
    clients.add(socket)
    console.log('Client connect. Total: ', clients.size)

    socket.on('close', () => {
        clients.delete(socket)
        console.log('Client disconnected. Total: ', clients.size)
    })
})

app.get('/status', (req, res) => {
    res.json({"status": 'good'})
})

app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`)
})

app.get('/matches', async (req, res) => {
  try {
    const response = await axios.get('https://api.football-data.org/v4/matches', {
    headers: {
        'X-Auth-Token': process.env.FOOTBALL_API_KEY
    }
})
    res.json(response.data)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: 'Failed to fetch matches' })
  }
})