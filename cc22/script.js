// ES6 Class CarCl
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed; // km/h
  }

  accelerate() {
    this.speed += 10;
    log(`${this.make} accelerated to ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    log(`${this.make} slowed down to ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6; // convert km/h to mi/h
  }

  set speedUS(speedMiH) {
    this.speed = speedMiH * 1.6; // convert mi/h to km/h
    log(`${this.make}'s speed set to ${this.speed.toFixed(1)} km/h (${speedMiH} mi/h)`);
  }
}

// Create a new car
const ford = new CarCl('Ford', 120);

// DOM log output
function log(message) {
  const output = document.getElementById('output');
  output.textContent += message + '\n';
}

// Buttons actions
function showSpeedKm() {
  log(`Current speed of ${ford.make}: ${ford.speed} km/h`);
}

function showSpeedUs() {
  log(`Current speed of ${ford.make}: ${ford.speedUS.toFixed(2)} mi/h`);
}

function setSpeedUs() {
  const speedInput = prompt('Enter new speed in mi/h:');
  const speed = parseFloat(speedInput);
  if (!isNaN(speed)) {
    ford.speedUS = speed;
  } else {
    log('Invalid speed input!');
  }
}

// Initial log
log(`Initialized ${ford.make} with ${ford.speed} km/h`);
