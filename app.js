// let person1 = {
//   name: "Joe",
//   sayHello() {
//     console.log(person1.name);
//   },
// };

// let person2 = {
//   name: "Chuy",
//   sayHello() {
//     console.log(person2.name);
//   },
// };

// let person3 = {
//   name: "Ashton",
//   sayHello() {
//     console.log(person3.name);
//   },
// };

// let person4 = {
//   name: "Stephen",
//   sayHello() {
//     console.log(person4.name);
//   },
// };

// let person5 = {
//   name: "Quinton",
//   sayHello() {
//     console.log(person5.name);
//   },
// };

// function Person(name, city, age) {
//     this.name = name;
//     this.city = city;
//     this.age = age;
// }

// Person.prototype.sayHello = function () {
//  console.log(`My name is ${this.name}`)
// }

// let p1 = new Person("Bob", "Vienna", 42);
// p1.sayHello();


class Person {
  constructor(name, city, age) {
    this.name = name;
    this.city = city;
    this.age = age;
  }

  sayHello() {
      console.log(`Hello, my name is ${this.name}.`)
  }

}

let p1 = new Person ("Bob", "Vienna", 42);
p1.sayHello();

class Vehicle {
    constructor(manufacturer, numOfWheels, numOfDoors) {
        this.manufacturer = manufacturer;
        this.numOfWheels = numOfWheels;
        this.numOfDoors
    }

    aboutVehicle() {
        console.log(`This is a ${this.vehicleType} made by ${this.manufacturer} and it has ${this.numOfWheels} wheels.`);
    }
}

class Truck extends Vehicle {
    constructor(manufacturer, numOfWheels, numOfDoors, truckBed) {
        super(manufacturer, numOfWheels);
        this.numOfDoors = numOfDoors;
        this.truckBed = truckBed;
    }
    aboutVehicle() {
        console.log(`This is a truck made by ${this.manufacturer} and it has ${this.numOfWheels} wheels. It has a truck bed and ${this.numOfDoors} doors.`);
    }
}

class Sedan extends Vehicle {
    constructor(manufacturer, numOfWheels, numOfDoors, mpg, size) {
        super(manufacturer, numOfWheels);
        this.numOfDoors = numOfDoors;
        this.mpg = mpg;
        this.size = size;
    }
    aboutVehicle() {
        console.log(`This is a sedan made by ${this.manufacturer} and it has ${this.numOfWheels} wheels. It is ${this.size} and gets ${this.mpg}mpg. It has ${this.numOfDoors} doors.`);
    }
}

class Motorcycle extends Vehicle {
    constructor(manufacturer, numOfWheels, numOfDoors, steeringMethod) {
        super(manufacturer, numOfWheels);
        this.numOfDoors = numOfDoors;
        this.steeringMethod = steeringMethod;
    }
    aboutVehicle() {
        console.log(`This is a motorcycle made by ${this.manufacturer} and it has ${this.numOfWheels} wheels. You steer with ${this.steeringMethod} and it has ${this.numOfDoors} doors.`);
    }
}

let v1 = new Motorcycle("Honda", 2, 0, "handlebars");
let v2 = new Sedan("Nissan", 4, 4, 60, "Small");
let v3 = new Truck("Ford", 4, 2, true);

v1.aboutVehicle();
v2.aboutVehicle();
v3.aboutVehicle();
