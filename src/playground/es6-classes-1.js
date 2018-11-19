class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi. i am ${this.name}`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`;
        }
}


class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`
        }

        return description;
    }
}


class Traveler extends Person {
    constructor(name, age, home) {
        super(name, age);
        this.home = home;
    }
    homeLocation() {
        return !!this.home;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.homeLocation()) {
            description += ` They live in ${this.home}.`
        }
        return description;
    }
}




const me = new Traveler('Brian Strylowski', 30, 'Charlotte NC');

console.log(me.getDescription());

const other = new Traveler();

console.log(other.getDescription());