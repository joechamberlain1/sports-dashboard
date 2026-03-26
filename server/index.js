require('dotenv').config()
const { default: axios } = require('axios')
const express = require('express')
const app = express()
const cors = require('cors')
const { WebSocketServer } = require('ws')
const { fetchMatches } = require('./services/footballApi')

app.use(cors({ origin: 'http://localhost:5173'}))

const wss = new WebSocketServer({ port: 8080 })
const clients = new Set()

setInterval(async () => {
  try {
    if (clients.size === 0) return
    console.log('Fetching matches, connected clients:', clients.size)
    const matches = await fetchMatches()
    clients.forEach(client => {
      client.send(JSON.stringify(matches))
    })
  } catch (error) {
    console.log(error.message)
  }
}, 30000)

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
    const matches = await fetchMatches()
    res.json(matches)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: 'Failed to fetch matches' })
  }
})