// Base class CarCl
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    log(`${this.make} accelerated to ${this.speed} km/h`);
    return this; // For chaining
  }

  brake() {
    this.speed -= 5;
    log(`${this.make} slowed to ${this.speed} km/h`);
    return this; // For chaining
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

// Child class EVCl
class EVCl extends CarCl {
  #charge; // private field

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    log(`${this.make} charged to ${this.#charge}%`);
    return this; // For chaining
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
    return this; // For chaining
  }

  getStatus() {
    return `${this.make} is going ${this.speed} km/h with ${this.#charge}% charge`;
  }
}

// Create a Rivian object
const rivian = new EVCl('Rivian', 120, 23);

// Log to output area
function log(message) {
  document.getElementById('output').textContent += message + '\n';
}

// Show current status
function showStatus() {
  log(rivian.getStatus());
}

// Initial log
log(`Initialized Rivian at 120 km/h with 23% battery`);
