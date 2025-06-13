function checkDogs(dogsJulia, dogsKate) {
  const output = document.getElementById("output");
  output.textContent = ''; // clear previous output

  // 1. Remove the first and last two from Julia's array (those are cat owners)
  const juliaCorrected = dogsJulia.slice(1, -2);

  // 2. Merge the corrected Julia data with Kate's
  const allDogs = juliaCorrected.concat(dogsKate);

  // 3. Loop and log adult or puppy
  allDogs.forEach((age, i) => {
    const message = age >= 3
      ? `Dog number ${i + 1} is an adult, and is ${age} years old`
      : `Dog number ${i + 1} is still a puppy 🐶`;
    output.textContent += message + '\n';
  });
}

// Run test data sets
function runTest1() {
  const juliaData1 = [3, 5, 2, 12, 7];
  const kateData1 = [4, 1, 15, 8, 3];
  checkDogs(juliaData1, kateData1);
}

function runTest2() {
  const juliaData2 = [9, 16, 6, 8, 3];
  const kateData2 = [10, 5, 6, 1, 4];
  checkDogs(juliaData2, kateData2);
}
