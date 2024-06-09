function findTeamWithMaxWins(teamsWins) {
    let maxWins = 0;
    let teamWithMaxWins = '';
  
    for (let team in teamsWins) {
      if (teamsWins.hasOwnProperty(team)) {
        if (teamsWins[team] > maxWins) {
          maxWins = teamsWins[team];
          teamWithMaxWins = team;
        }
      }
    }
  
    return teamWithMaxWins;
  }
  const teamsWins = {
    "Team X": 20,
    "Team Y": 15,
    "Team Z": 25
  };
  const teamWithMaxWins = findTeamWithMaxWins(teamsWins);
  console.log("Team with maximum wins:", teamWithMaxWins);
  