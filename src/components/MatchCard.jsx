import "../App.css"

const MatchCard = ( {match} ) => {

  const getStatusBadge = (status) => {  
    if (status === 'IN_PLAY') return { label: '● Live', className: 'bg-green-900 text-green-400' }
    if (status === 'FINISHED') return { label: 'Finished', className: 'bg-blue-900 text-blue-400' }
    return { label: 'Upcoming', className: 'bg-gray-700 text-gray-400' }
  }

  const badge = getStatusBadge(match.status)

  return (
    <div className="bg-gray-900 border border-gray-700 rounded-xl p-4 m-6 text-white min-w-max">
      {/* Top row: competition name + status badge */}
      <div className="flex justify-between items-center mb-3">
        <span className="text-gray-400 text-xs">{match.competition.name}</span>
        <span className={`text-xs px-3 py-1 rounded-full ${badge.className}`}>{badge.label}</span>
      </div>
      {/* Middle row: home team, score/vs, away team */}
      <div className="flex justify-between items-center mb-3">
        <span className="flex-1 font-bold">
          {match.homeTeam.name === "Newcastle United FC" ? "TOON ARMY" : match.homeTeam.name}
        </span>
        <span className="w-24 text-center text-xl font-bold">
          {match.status === 'TIMED' ? 'vs' : `${match.score.fullTime.home} - ${match.score.fullTime.away}`}
        </span>
        <span className="flex-1 font-bold text-right">
          {match.awayTeam.name === "Newcastle United FC" ? "TOON ARMY" : match.awayTeam.name}
        </span>
      </div>
      {/* Bottom row: kick off time */}
      <div className="flex justify-between items-center mb-3 border-t border-gray-700 pt-2">
        <span>{new Date(match.utcDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        <span>{new Date(match.utcDate).toDateString()}</span>
      </div>
    </div>
  )
}

export default MatchCard