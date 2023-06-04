// Простые
   let number  = 1234 // Числовой тип
// объявление  иницализация
let double = 12.43

let string = "some string" // Строковый тип
let string1 = 'some string 1'

let boolean = true // Логический тип
let boolean1 = false

let undef = undefined // Пустые значения
// NaN, null

let symbol = Symbol("some") // Символ*

// Составные
let array = [] // Массив

let obj = {} // Объект

let func = function(a, b, c) {} // Функция
let func1 = (a, b, c) => {} // Стрелочная функция
function func2(a, b, c) {}

let value

value = 1432

value = "string"


const yep = "VALUE" // Константная ссылка на переменную в памяти

// yep = "Other value" // error - нельзя изменять значение константы

const obj1 = {
    key: "value"
}

obj1.key // "value"

obj1.key = "value1"
obj1.key1 = "value_112"

console.log(obj1)

const arr = []

console.log("this array - ", arr)

arr.push("string")

console.log("this array - ", arr)

const num = 0//parseInt(prompt("Введите число"))
// console.log(typeof num, num)
// console.log(typeof parseInt(num), num)

let res = ""

if(Number.isNaN(num)){
    res = "Введено не число"
}
else if(num > 10){
    res = "Чисто больше загаданного"
}
else if(num === 10){
    res = "Вы угадали"
}
else {
    res = "Число меньше загаданного"
}

// alert(res)

const a = 144
const b = 4

let c
c = a + b
c = a * b
c = a - b
c = a / b
c = a**b // Степень
c = a % b // Взятие остатка от деления

console.log(c)

// 1. Запросить два числа
// 2. Запросить оперцию 
// 3. Вернуть ошибку или результат

const num1 =0 // +prompt("Введите первое число")
const num2 =0 // +prompt("Введите второе число")
const action =0 // prompt("Введите действие")

if(Number.isNaN(num1) || Number.isNaN(num2)){
    alert("Не корректные числа")
}
else {
    let res
    // if(action === "*"){
    //     res = num1 * num2
    // }
    // else if(action === "/"){
    //     res = num1 / num2
    // }
    // else if(action === "-"){
    //     res = num1 - num2
    // }
    // else if(action === "+"){
    //     res = num1 + num2
    // }
    // else if(action === "**"){
    //     res = num1 ** num2
    // }
    // else if(action === "%"){
    //     res = num1 % num2
    // }

    switch(action){
        case "/":
            res = num1 / num2
            break
        case "*":
            res = num1 * num2
            break
        case "+":
            res = num1 + num2
            break
        case "-":
            res = num1 - num2
            break
        case "%":
            res = num1 % num2
            break
        case "**":
            res = num1 ** num2
            break
        default:
            res = undefined
    }

    if(res === undefined){
        // alert("Не корректная операция")
    }
    else {
        alert("Результат - " + res)
    }
}

for(let i = 0; i < 10; i++){ // i = i + 1 === i++
    // console.log("Итерация №", i)
}

let flag = true

while(flag){
    const n = Math.round(Math.random() * 99 + 1)
    flag = n % 4 !== 3
}

let i = 0

do {
    console.log("do..while")
} while(i > 0)

while(i > 0) {
    console.log("while")
}