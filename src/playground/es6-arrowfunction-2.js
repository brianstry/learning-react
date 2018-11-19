//aguments object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};

console.log(add(55, 1));

// this keyword - no longer bound

const user = {
    name: 'Brian',
    cities: ['DC, Charlotte'],
    printPlacesLived() {
        this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
user.printPlacesLived();


const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((multi) => multi * this.multiplyBy);
    }

}

console.log(multiplier.multiply());