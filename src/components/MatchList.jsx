import MatchCard from './MatchCard'

const MatchList = ({ matches }) => {
  
  if (!matches || !Array.isArray(matches)) return <p>No matches available</p>

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
      {matches.map(
        match => 
        <MatchCard key={match.id} match={match} />
      )}
    </div>
  )
}

export default MatchList