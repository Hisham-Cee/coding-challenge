// Given match data
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Create player arrays
const [players1, players2] = game.players;

// 2. Goalkeeper and field players for team 1
const [gk, ...fieldPlayers] = players1;

// 3. All players from both teams
const allPlayers = [...players1, ...players2];

// 4. Final players for team1 including substitutes
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// 5. Extract odds using object destructuring
const {
  odds: { team1, x: draw, team2 },
} = game;

// 6. Function to print players and number of goals scored
function printGoals(...players) {
  console.log(`${players.length} goals were scored`);
  for (const player of players) {
    console.log(player);
  }
}

// 7. Print which team is more likely to win using logical AND
team1 < team2 && console.log(`${game.team1} is more likely to win`);
team2 < team1 && console.log(`${game.team2} is more likely to win`);

// Testing printGoals function
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);
