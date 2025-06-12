// Existing game data
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

// 1. Loop over game.scored and log each goal
console.log('--- Goal Scorers ---');
game.scored.forEach((player, index) => {
  console.log(`Goal ${index + 1}: ${player}`);
});

// 2. Calculate the average of the odds
const odds = Object.values(game.odds);
let sum = 0;
for (const odd of odds) sum += odd;
const average = sum / odds.length;
console.log(`\nAverage odd: ${average.toFixed(2)}`);

// 3. Print formatted odds
console.log('\n--- Match Odds ---');
for (const [key, value] of Object.entries(game.odds)) {
  const teamStr = key === 'x' ? 'draw' : `victory ${game[key]}`;
  console.log(`Odd of ${teamStr}: ${value}`);
}

// 4. Bonus: Create the scorers object
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log('\n--- Scorers Object ---');
console.log(scorers);
