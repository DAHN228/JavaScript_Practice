// scope - глобальный и локальный. это доступность переменных в функциях (видимость)
// функция Б находится в скоупе функции А, поэтому а доступна в ней, то есть вложенные функции видят объявленные выше переменные

function funA() {
    let a = 1

    function funB() {
        let b = 2

        function funC() {
            let c = 3
            console.log('funC', a, b, c)
        }
        funC()
        console.log('funB', a, b)
    }
    funB()
    console.log('funA', a)
}
funA()
