const MatchCard = ( {match} ) => {


return (
    <>
        <div className="">{new Date(match.utcDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
        <div className="">{match.homeTeam.name} </div>
        <div className="">{match.status === 'TIMED' ? 'vs' : `${match.score.fullTime.home} - ${match.score.fullTime.away}`}</div>
        <div className="">{match.awayTeam.name} </div> 
            
    </>
  )
}

export default MatchCard