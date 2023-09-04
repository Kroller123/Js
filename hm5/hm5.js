// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let p = 3.14

let arial = 0

let arialf = (a, b) => {
    arial = a * b
    document.write(`<div style="background-color: #eeeeee"><p>${arial}</p></div>`)
    return arial
}

arialf(5, 5)


// - створити функцію яка обчислює та повертає площу кола з радіусом r

let arialRadius = 0

let arialRadiusef = (r) => {
    arialRadius = p * r ** 2
    document.write(`<div style="background-color: #eeeeee"><p>${arialRadius}</p></div>`)
    return arialRadius
}

arialRadiusef(5)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let arialCylinder = 0

let arialCylinderf = (h, r) => {
    arialCylinder = 2 * p * (r ** 2) + 2 * p * r * h
    document.write(`<div style="background-color: #eeeeee"><p>${arialCylinder}</p></div>`)
    return arialCylinder
}

arialCylinderf(7, 2)


//- створити функцію яка приймає масив та виводить кожен його елемент

let arrayPrint = (array) => {
    document.write(`<div style="background-color: #eeeeee">`)
    for (let element of array) {
        document.write(`<p> --${element}</p>`)
    }
    document.write(`</div>`)
}

arrayPrint([1, 2, 3, 5, 1, 5, 6, 443, 'fsdfsd', true, 432])


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let createP = (argument) => {
    document.write(`<div style="background-color: #eeeeee"><p>${argument}</p></div>`)
}

createP('Hello')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let createUL = (text) => {
    document.write(`<ul style="background-color: #eeeeee">
                    <li>${text}</li>
                    <li>${text}</li>
                    <li>${text}</li>
                    </ul>`)
}

createUL('he')


// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)


let createULcount = (text, num) => {
    document.write(`<ul style="background-color: #eeeeee">`)
    for (let i = 0; i < num; i++)
        document.write(`<li>${text}</li>`)
    document.write(`</ul>`)

}

createULcount('by2', 4)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let createArray = (...array) => {
    let arr = []
    for (let element of array) {
        arr.push(element)
    }
    console.log(arr)
}

createArray(1, 2, 3, 5, 1, 5, 6, 443, 'fsdfsd', true, 432)


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.


let createObject = (array) => {
    for (let i = 0; i < array.length; i++) {
        document.write(`<div style="background-color: #e8e8e8">`)
        document.write(`name : ${array[i]['name']} age : ${array[i]['age']} status : ${array[i]['status']} `)
        document.write(`</div>`)
        document.write(`<p>-------------------------------------</p>`)
    }
}

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

createObject(users)

// - створити функцію яка повертає найменьше число з масиву

let numNim = (numbers) => {
    let numMin = numbers[0]
    for (i = 1; i < numbers.length; i++) {
        if (numbers[i] <= numMin) {
            numMin = numbers[i];
        }
    }
    console.log(numMin)
}

numNim([1, 2, 4, 6, 1, 5, 7, 4, 2, 6, 7, 4, 0.1])


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13


let sumNum = (array) => {
    let summaNum = 0
    for (let element of array) {
        summaNum += element
    }
    console.log(summaNum)
}

sumNum([1, 2, 10,])


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах

let swap = (arr, num1, num2) => {
    let buf = arr[num1]
    console.log(`before`, arr)
    arr[num1] = arr[num2]
    arr[num2] = buf
    console.log(`after`, arr)
}

swap([11, 22, 33, 44], 2, 3)



let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (let element of currencies) {
        if (element.currency === exchangeCurrency)
            console.log(`${sumUAH / element.value} ${exchangeCurrency}`)
    }
}

let currencies = [
    {currency: 'USD', value: 40},
    {currency: 'EUR', value: 42},
    {currency: 'AED', value: 10.1},
    {currency: 'PL', value: 7},
    {currency: 'CZK', value: 1.02},
]


exchange(10000, 'EUR')




function text(text) {
    let users = [
        {name: 'vasya', age: 31, status: false},
        {name: 'petya', age: 30, status: true},
        {name: 'kolya', age: 29, status: true},
        {name: 'olya', age: 28, status: false},
        {name: 'max', age: 30, status: true},
        {name: 'anya', age: 31, status: false},
        {name: 'oleg', age: 28, status: false},
        {name: 'andrey', age: 29, status: true},
        {name: 'masha', age: 30, status: true},
        {name: 'olya', age: 31, status: false},
        {name: 'max', age: 31, status: true}
    ];

}