const axios = require('axios')

const fetchMatches = async () => {
    const response = await axios.get('https://api.football-data.org/v4/matches', {
    headers: {
        'X-Auth-Token': process.env.FOOTBALL_API_KEY
        }   
    })
    console.log('matches count:', response.data.matches.length)
    return response.data.matches
}

module.exports = { fetchMatches }  // put it in the box