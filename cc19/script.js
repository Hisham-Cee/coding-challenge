const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(humanAge => humanAge >= 18)
    .reduce((avg, age, _, arr) => avg + age / arr.length, 0);

// Test Data
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const output = document.getElementById('output');

document.getElementById('calc1').addEventListener('click', () => {
  const avg = calcAverageHumanAge(data1);
  output.textContent = `Average human age (Data 1): ${avg.toFixed(2)}`;
});

document.getElementById('calc2').addEventListener('click', () => {
  const avg = calcAverageHumanAge(data2);
  output.textContent = `Average human age (Data 2): ${avg.toFixed(2)}`;
});
