import MatchCard from './MatchCard'

const MatchList = ({ matches }) => {
  
  if (!matches || !Array.isArray(matches)) return <p>No matches available</p>

  if (matches.length === 0) return (
    <p className="text-gray-500 text-center mt-32 text-lg">
      Must be the end of the season — no matches to show.
    </p>
  )

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