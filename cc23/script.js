// Parent Constructor Function
function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

Car.prototype.accelerate = function () {
  this.speed += 10;
  log(`${this.make} accelerated to ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  log(`${this.make} slowed down to ${this.speed} km/h`);
};

// Child Constructor Function
function EV(make, speed, charge) {
  Car.call(this, make, speed); // Inherit make & speed
  this.charge = charge;
}

// Inherit Car prototype
EV.prototype = Object.create(Car.prototype);

// Charge Battery Method
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  log(`${this.make}'s battery charged to ${this.charge}%`);
};

// Override accelerate method (Polymorphism)
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
};

// Create EV object
const tesla = new EV('Tesla', 120, 23);

// Helper log function
function log(message) {
  const output = document.getElementById('output');
  output.textContent += message + '\n';
}

// Show status button
function showStatus() {
  log(`${tesla.make}: Speed = ${tesla.speed} km/h, Charge = ${tesla.charge}%`);
}

// Initial status
log(`Initialized ${tesla.make} at ${tesla.speed} km/h with ${tesla.charge}% battery`);
