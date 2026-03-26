import { useState } from 'react'
import useWebSocket from './hooks/useWebSocket'
import Header from './components/Header'
import MatchCard from './components/MatchCard'

function App() {

  const message = useWebSocket()

  return (
    <>
      {message && message.message}     
      <Header />
      <MatchCard match={{
      homeTeam: { name: 'Arsenal' },
      awayTeam: { name: 'Chelsea' },
      utcDate: '2026-03-26T14:00:00Z',
      status: 'TIMED',
      score: {
        fullTime: { home: null, away: null }
      }
      }} />
    </>
  )
}

export default App 
