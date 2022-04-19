// __proto__ - доступ к родительскому прототипу es6
// Object.getPrototypeOf() es5

// function Cat(name, color) {
//     this.name = name;
//     this.color = color;
// }

// Cat.prototype.voice = function(){
//     console.log(` ${this.name} says meow`)
// }

// const cat = new Cat ('Kot', 'white')

// console.log(Cat.prototype)
// console.log(cat)
// console.log(cat.__proto__ === Cat.prototype)
// console.log(cat.constructor)


// function Person() {}
// Person.prototype.legs = 2
// Person.prototype.skin = 'white'

// const person = new Person()
// person.name = 'Danila'

// console.log('skin' in person)
// console.log(person.legs)
// console.log(person.name)

// console.log(person.hasOwnProperty('name'))
// console.log(person.hasOwnProperty('skin'))

//Object.create()

const proto = {year: 2022}
const myYear = Object.create(proto)

console.log(myYear.year)
console.log(myYear.hasOwnProperty('year'))
console.log(myYear.__proto__ === proto)