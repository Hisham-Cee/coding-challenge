const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const input = prompt(
      `${this.question}\n${this.options.join('\n')}\n(Write option number)`
    );
    const answer = Number(input);

    if (Number.isFinite(answer) && answer >= 0 && answer < this.answers.length) {
      this.answers[answer]++;
      this.displayResults();
    } else {
      alert("Please enter a valid option number.");
    }
  },

  displayResults() {
    document.getElementById("result-array").textContent = `[${this.answers.join(', ')}]`;
    document.getElementById("result-string").textContent = `Poll results are ${this.answers.join(', ')}`;
  }
};

// Render question and options
document.getElementById("poll-question").textContent = poll.question;
const optionsContainer = document.getElementById("poll-options");
poll.options.forEach(option => {
  const div = document.createElement("div");
  div.className = "option";
  div.textContent = option;
  optionsContainer.appendChild(div);
});

// Event handler for button
document.getElementById("poll-btn").addEventListener("click", () => {
  poll.registerNewAnswer();
});

// BONUS: Display external data using .call
const testData1 = [5, 2, 3];
const testData2 = [1, 5, 3, 9, 6, 1];

function displayResultsExternal(data) {
  const arrayResult = `[${data.join(', ')}]`;
  const stringResult = `Poll results are ${data.join(', ')}`;
  console.log("Test Data:", data);
  console.log("As Array:", arrayResult);
  console.log("As String:", stringResult);
}

// Uncomment to test in console:
// displayResultsExternal(testData1);
// displayResultsExternal(testData2);
