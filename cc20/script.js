const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

document.getElementById('analyze').addEventListener('click', () => {
  const log = [];

  // 1. Calculate recommended food and add to object
  dogs.forEach(dog => {
    dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
  });

  // 2. Find Sarah's dog
  const sarahsDog = dogs.find(dog => dog.owners.includes('Sarah'));
  log.push(`Sarah's dog is eating too ${sarahsDog.curFood > sarahsDog.recommendedFood ? 'much' : 'little'}.`);

  // 3. Create owner arrays
  const ownersEatTooMuch = dogs
    .filter(dog => dog.curFood > dog.recommendedFood)
    .flatMap(dog => dog.owners);

  const ownersEatTooLittle = dogs
    .filter(dog => dog.curFood < dog.recommendedFood)
    .flatMap(dog => dog.owners);

  // 4. Log owner strings
  log.push(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
  log.push(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

  // 5. Any dog eating exactly the recommended amount?
  log.push("Any dog eating exactly recommended amount? " + dogs.some(dog => dog.curFood === dog.recommendedFood));

  // 6. Any dog eating an okay amount?
  const isOkayAmount = dog =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1;

  log.push("Any dog eating an okay amount? " + dogs.some(isOkayAmount));

  // 7. Dogs eating okay amount
  const okayDogs = dogs.filter(isOkayAmount);
  log.push(`Number of dogs eating okay amount: ${okayDogs.length}`);

  // 8. Shallow copy sorted by recommended food
  const sortedDogs = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);
  log.push("\nSorted dogs by recommended food portion:");
  sortedDogs.forEach((dog, i) =>
    log.push(`Dog ${i + 1}: ${dog.recommendedFood}g (${dog.owners.join(', ')})`)
  );

  document.getElementById('output').textContent = log.join('\n');
});
