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
