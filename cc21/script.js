// Constructor Function for Car
function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

// Accelerate method
Car.prototype.accelerate = function () {
  this.speed += 10;
  logOutput(`${this.make} accelerated to ${this.speed} km/h`);
};

// Brake method
Car.prototype.brake = function () {
  this.speed -= 5;
  logOutput(`${this.make} slowed down to ${this.speed} km/h`);
};

// Helper function to print logs to the page
function logOutput(message) {
  const output = document.getElementById('output');
  output.textContent += message + '\n';
}

// Create 2 car instances
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

// Initial status log
logOutput(`BMW is going at ${bmw.speed} km/h`);
logOutput(`Mercedes is going at ${mercedes.speed} km/h`);
