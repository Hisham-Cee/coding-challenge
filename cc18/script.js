function calcAverageHumanAge(ages) {
  const result = document.getElementById("result");
  result.textContent = ""; // Clear previous output

  // 1. Convert dog age to human age
  const humanAges = ages.map(age =>
    age <= 2 ? 2 * age : 16 + age * 4
  );

  // 2. Filter out dogs that are < 18 human years
  const adults = humanAges.filter(age => age >= 18);

  // 3. Calculate average age of adult dogs
  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

  // 4. Output
  result.textContent += `Original Dog Ages: [${ages.join(', ')}]\n`;
  result.textContent += `Human Ages: [${humanAges.join(', ')}]\n`;
  result.textContent += `Adult Dogs' Human Ages (18+): [${adults.join(', ')}]\n`;
  result.textContent += `Average Human Age of Adult Dogs: ${average.toFixed(2)} years\n`;
}

// Buttons will call these
function runData1() {
  calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
}

function runData2() {
  calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
}
