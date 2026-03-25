import { useState } from 'react'
import useWebSocket from './hooks/useWebSocket'
import Header from './components/Header'

function App() {

  const message = useWebSocket()

  return (
    <>
      {message && message.message}     
      <Header />
    </>
  )
}

export default App 
