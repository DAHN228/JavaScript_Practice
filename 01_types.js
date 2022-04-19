// // 7 типов данных: null, undefined, boolean, number, string, object, symbol

// console.log(typeof 0)
// console.log(typeof true)
// console.log(typeof 'string')// "", '', ``
// console.log(typeof undefined)// используется, когда переменная не объявлена или функция ничего не возвращает
// console.log(typeof Math)
// console.log(typeof Symbol('JS'))
// console.log(typeof null)// неточность, тип данных - нулл; переменная была объявлена, но после мы поместили туда нулл
// console.log(typeof function(){})
// console.log(typeof NaN)// NaN - не число, но тип - number

// // Приведение типов. Существуют значения, которые приводятся к false: '' 0 null undefined NaN false
// let language = 'JavaScript'
// if (language) {
//     console.log('The best language is ' + language)
// }
// console.log(Boolean(''))
// console.log(Boolean('Hello'))
// console.log(Boolean(0))
// console.log(Boolean(' '))
// console.log(Boolean('0'))
// console.log(Boolean([]))
// console.log(Boolean({}))
// console.log(Boolean(function() {}))

// //Строки и числа 
// console.log(1 + '2') //В данном случае приводится 1 к строковому формату и происходит конкатинация
// console.log('' + 1 + 0)//Тоже строка
// console.log('' - 1 + 0)// число, так как присутствует -
// console.log('3'*'8')// число, так как для строк оператор * не определен
// console.log(4 + 10 + 'px')//string 14px
// console.log('px' + 5 + 10)//px510
// console.log('42' - 40)//2
// console.log('42px' - 2)//NaN
// console.log(null + 2)//2
// console.log(undefined + 42)//NaN

// == vs === первое сранивает по значению с приведением типов, а второе - без приведения типов

// console.log(2 == '2')// true
// console.log(2 === '2')// false
// console.log(undefined == null)// true
// console.log(undefined === null)// false
// console.log('0' == false)//true
// console.log('0' == 0)//true

//Интересные сравнения
console.log(false == '')// true
console.log(false == [])//true
console.log(false == {})//false
console.log('' == 0)// true
console.log('' == [])//true
console.log('' == {})//false
console.log(0 == [])//
console.log(0 == {})//
console.log(0 == null)//