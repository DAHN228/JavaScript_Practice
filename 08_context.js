// //Контекст определяет как функция была вызвана. используется с this. метод call(context, args...) объекта принимает контекст
// const person = {
//     surname: 'Stark',
//     knows: function (what, name) {
//         console.log(`You know ${what}, ${name} ${this.surname}`);
//     }
// }

// const john = {surname: 'Snow'}

// person.knows('everything', 'Rob')
// person.knows.call(john, 'nothing', 'John')
// person.knows.apply(john, ['nothing', 'John'])
// person.knows.call(john, ...['nothing', 'John'])
// //person.knows.bind(john, 'nothing', 'John')// возвращает новую функцию
// const bound = person.knows.bind(john, 'nothing', 'John')
// bound()

// function Person(name, age) {
//     this.name = name
//     this.age = age

//     console.log(this)
// }

// const elena = new Person('Elena', 20)

//Explicit binding Явный
function logThis() {
    console.log(this)
}

const obj = {num:42}
logThis.apply(obj)
logThis.call(obj)
logThis.bind(obj)()

//Implicit binding Неявный
const animal = {
    legs: 4,
    logThis: function(){
        console.log(this)
    }
}
animal.logThis()

//Стрелочные функции. Главное преимущество - не создает собственный контекст

function Cat(color) {
    this.color = color
    console.log('This', this)
    ;( () => console.log('Arrow this', this)) ()
}

new Cat('red')
