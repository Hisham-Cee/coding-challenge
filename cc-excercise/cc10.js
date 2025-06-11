let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
// Restore game when 'Again' button is clicked
document.querySelector('.again').addEventListener('click', function () {
  // 1. Restore score and secretNumber
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // 2. Restore message
  document.querySelector('.message').textContent = 'Start guessing...';

  // 3. Restore number and input
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  // 4. Restore score display
  document.getElementById('score').textContent = score;

  // 5. Restore styling
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
// ...existing code...

// Check guess logic
document.querySelector('.guess').addEventListener('change', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      score--;
      document.getElementById('score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.getElementById('score').textContent = 0;
    }
  }
});