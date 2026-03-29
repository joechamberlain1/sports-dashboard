import MatchCard from './MatchCard'

const MatchList = ({ matches }) => {
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