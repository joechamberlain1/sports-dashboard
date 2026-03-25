import { useEffect, useState } from 'react'

const useWebSocket = () => {

const [message, setMessage] = useState("")

useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080')
    socket.onopen = () => console.log('WebSocket connected')
    socket.onmessage = (event) => setMessage(JSON.parse(event.data))

    return () => {
    socket.close()
  }
}, [])

  return message 
}

export default useWebSocket