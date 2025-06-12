document.getElementById('convert').addEventListener('click', function () {
  const input = document.getElementById('input').value;
  const lines = input.split('\n');
  const output = document.getElementById('output');
  output.textContent = '';

  lines.forEach((line, index) => {
    const words = line.toLowerCase().trim().split('_');

    if (words.length !== 2 || !words[0] || !words[1]) return;

    const camelCase = words[0] + words[1][0].toUpperCase() + words[1].slice(1);
    const padded = camelCase.padEnd(20, ' ');
    const checkmarks = '✅'.repeat(index + 1);

    output.textContent += `${padded}${checkmarks}\n`;
  });
});
