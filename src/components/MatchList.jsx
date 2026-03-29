import MatchCard from './MatchCard'

const MatchList = ({ matches }) => {
  
  if (!matches || !Array.isArray(matches)) return <p>No matches available</p>

  return (
    <>
      {matches.map(
        match => 
        <MatchCard key={match.id} match={match} />
      )}
    </>
  )
}

export default MatchList