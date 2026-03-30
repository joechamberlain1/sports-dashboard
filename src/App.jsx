import { useState, useEffect } from 'react'
import useWebSocket from './hooks/useWebSocket'
import Header from './components/Header'
import MatchList from './components/MatchList'
import { getMatches } from './services/matchesApi'

function App() {
  const [matches, setMatches] = useState([])
  const [loading, setLoading] = useState(true)
  const message = useWebSocket()

  useEffect(() => {
    const loadMatches = async () => {
      const data = await getMatches()
      const sorted = data.sort((a, b) => new Date(b.utcDate) - new Date(a.utcDate))
      setMatches(sorted)
      setLoading(false)
    }
    loadMatches()
  }, [])

  useEffect(() => {
    if (message) {
      const sorted = message.sort((a, b) => new Date(b.utcDate) - new Date(a.utcDate))
      setMatches(sorted)
    }
  }, [message])

  return (
  <div className="bg-gray-950 min-h-screen p-6">
      <Header />
      {loading ? <div className="text-white text-center mt-32 text-xl">LOADING</div> : <MatchList matches={matches}/>}
    </div>
  )
}

export default App 
