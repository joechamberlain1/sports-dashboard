import { useState, useEffect } from 'react'
import useWebSocket from './hooks/useWebSocket'
import Header from './components/Header'
import MatchList from './components/MatchList'
import { getMatches } from './services/matchesApi'

function App() {
  const [matches, setMatches] = useState([])
  const message = useWebSocket()

  useEffect(() => {
    const loadMatches = async () => {
      const data = await getMatches()
      console.log('data from API:', data)
      setMatches(data)
    }
    loadMatches()
  }, [])

  useEffect(() => {
    if (message) setMatches(message)
  }, [message])

  return (
    <>
      <Header />
      <MatchList matches={matches} />
    </>
  )
}

export default App 
