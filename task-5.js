class Car {
  static getSpecs(car) {
    console.log(`
        Max speed: ${car.maxSpeed}
        Speed: ${car.speed}
        Is on: ${car.isOn}
        Distance: ${car.distance}
        Price: ${car.price}
        `);
  }

  constructor(carObj) {
    this.speed = carObj.speed = 0;
    this._price = carObj.price;
    this.maxSpeed = carObj.maxSpeed;
    this.isOn = carObj.isOn = false;
    this.distance = carObj.distance = 0;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    if (value > this.maxSpeed) {
      console.log('Поточна швидкість не може бути більше максимальної');
    } else if (this.isOn === false) {
      console.log('Заведіть машину!');
    } else {
      this.speed = value;
    }
  }

  decelerate(value) {
    const result = this.speed - value;

    if (result < 0) {
      console.log('Поточна швидкість не може бути менше нуля');
    } else {
      this.speed -= value;
    }
  }

  drive(hours) {
    if (this.isOn === false) {
      console.log('Заведіть машину!');
    } else if (this.speed === 0) {
      console.log('Ви не зрушились з місця');
    } else {
      this.distance += hours * this.speed;
    }
  }
}

// ------------

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
