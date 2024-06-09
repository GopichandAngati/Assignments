const players = [
  { name: "Sachin",   team: "Team A", runs: 250 },
  { name: "dhoni",    team: "Team B", runs: 340 },
  { name: "kohli",    team: "Team C", runs: 220 },
  { name: "Subbu",    team: "Team A", runs: 540 },
  { name: "Aravindh", team: "Team B", runs: 480 },
];


function findTopScorers(playersArray) {
  playersArray.sort((a, b) => b.runs - a.runs);
  const top3 = playersArray.slice(0, 3);
  return top3;
}
const topScorers = findTopScorers(players);
console.log("Top 3 Scorers:");
console.log(topScorers);
