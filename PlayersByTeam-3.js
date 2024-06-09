const players = [
  { name: "Subbu",  team: "Team W", runs: 650 },
  { name: "Babu",   team: "Team X", runs: 540 },
  { name: "Baskar", team: "Team Y", runs: 390 },
  { name: "Riyaz",  team: "Team Z", runs: 280 },
];
function findPlayersByTeam(playersArray, teamName) {
  return playersArray.filter(player => player.team === teamName);
}
const teamName = "Team W";
const playersOfTeamA = findPlayersByTeam(players, teamName);
console.log(`Players belonging to ${teamName}:`);
console.log(playersOfTeamA);
