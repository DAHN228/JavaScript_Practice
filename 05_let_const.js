// в ES6 добавились let и const, а также блок скоупа  {}
//let - можно будет изменить, доступна только внутри блочного скоупа
let a = 'variable a'
let b = 'variable b'

{
    a = 'new variable a'
    let b = 'local variable b'
    console.log('scope a', a)
    console.log('scope b', b)
}
console.log('a', a)
console.log('b', b)

// const
const PORT = 8080
//PORT = 2000 // ошибка
const array = ['JavaScript', 'is', 'Awesome']
array.push('!')
array[0] = 'JS'
console.log(array)
const obj = {}
obj.name = 'Danila'
obj.age = 23


