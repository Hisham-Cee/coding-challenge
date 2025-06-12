// Given game events map
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1. Create an array 'events' of the different game events (no duplicates)
const events = [...new Set(gameEvents.values())];
console.log('Different events:', events);

// 2. Remove the unfair yellow card from minute 64
gameEvents.delete(64);
console.log('Updated game events after removing minute 64:', gameEvents);

// 3. Calculate and log: "An event happened, on average, every 9 minutes"
const time = [...gameEvents.keys()].pop(); // Last key (most accurate match time)
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// 4. Log all events with half info
for (const [minute, event] of gameEvents) {
  const half = minute <= 45 ? '[FIRST HALF]' : '[SECOND HALF]';
  console.log(`${half} ${minute}: ${event}`);
}
