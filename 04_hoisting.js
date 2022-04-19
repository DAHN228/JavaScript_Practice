// console.log(sum(1, 41))

// function sum (a, b) {
//     return a + b
// }
// var i
// console.log(i)//undefined
// var i = 42

// console.log(i)//undefined
// var i = 42

// console.log(num)//ошибка
// const num = 42 //const и let не поддаются хоистингу и js выбрасывает ReferenceError
// console.log(num)


// в JS можем вызвать функцию перед ее объявлением. хоистинг - перемещение перед интерпритацией кода объявления некоторых вещей в начало

// function expression & function declaration

// console.log(square(25))
// function square(num){//function declaration ошибки нет
//     return num * num
// }

console.log(square())//ошибка, так как еще не инициализирована
const square = function (num) {//function expression
    return num * num
}