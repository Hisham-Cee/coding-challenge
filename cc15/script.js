const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0), // [0, 0, 0, 0]

  registerNewAnswer() {
    const input = prompt(
      `${this.question}\n${this.options.join('\n')}\n(Write option number)`
    );
    const answer = Number(input);

    if (
      Number.isFinite(answer) &&
      answer >= 0 &&
      answer < this.answers.length
    ) {
      this.answers[answer]++;
      this.displayResults('array');
      this.displayResults('string');
    } else {
      alert("Invalid input. Please enter a valid option number.");
    }
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  }
};

// Connect button click to registerNewAnswer
document.getElementById('poll-btn').addEventListener('click', () => {
  poll.registerNewAnswer();
});

// BONUS: Test external data with displayResults using call()
const testData1 = [5, 2, 3];
const testData2 = [1, 5, 3, 9, 6, 1];

poll.displayResults.call({ answers: testData1 }, 'array');
poll.displayResults.call({ answers: testData1 }, 'string');
poll.displayResults.call({ answers: testData2 }, 'array');
poll.displayResults.call({ answers: testData2 }, 'string');
