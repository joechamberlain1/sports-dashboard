const getMatches = async () => {
  const response = await fetch('http://localhost:3000/matches')
  const data = await response.json()
  return data
}

export { getMatches }