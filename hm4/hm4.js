// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let p = 3.14

let arial = 0

function arialf(a, b) {
    arial = a * b
    document.write(`<div style="background-color: #eeeeee"><p>${arial}</p></div>`)
    return arial
}

arialf(5, 5)


// - створити функцію яка обчислює та повертає площу кола з радіусом r

let arialRadius = 0

function arialRadiusef(r) {
    arialRadius = p * r ** 2
    document.write(`<div style="background-color: #eeeeee"><p>${arialRadius}</p></div>`)
    return arialRadius
}

arialRadiusef(5)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let arialCylinder = 0

function arialCylinderf(h, r) {
    arialCylinder = 2 * p * (r ** 2) + 2 * p * r * h
    document.write(`<div style="background-color: #eeeeee"><p>${arialCylinder}</p></div>`)
    return arialCylinder
}

arialCylinderf(7, 2)


//- створити функцію яка приймає масив та виводить кожен його елемент

function arrayPrint(array) {
    document.write(`<div style="background-color: #eeeeee">`)
    for (let element of array) {
        document.write(`<p> --${element}</p>`)
    }
    document.write(`</div>`)
}

arrayPrint([1, 2, 3, 5, 1, 5, 6, 443, 'fsdfsd', true, 432])


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function createP(argument) {
    document.write(`<div style="background-color: #eeeeee"><p>${argument}</p></div>`)
}

createP('Hello')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function createUL(text) {
    document.write(`<ul style="background-color: #eeeeee">
                    <li>${text}</li>
                    <li>${text}</li>
                    <li>${text}</li>
                    </ul>`)
}

createUL('he')


// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)


function createULcount(text, num) {
    document.write(`<ul style="background-color: #eeeeee">`)
    for (let i = 0; i < num; i++)
        document.write(`<li>${text}</li>`)
    document.write(`</ul>`)

}

createULcount('by2', 4)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function createArray(...trash) {
    console.log(Array.from(trash))
}

createArray(1, 2, 3, 5, 1, 5, 6, 443, 'fsdfsd', true, 432)


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.


function createObject(array) {
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

function numNim(numbers) {
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


function sumNum(array) {
    let summaNum = 0
    for (let element of array) {
        summaNum += element
    }
    console.log(summaNum)
}

sumNum([1, 2, 10,])


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах

function swap(arr, index1, index2) {
    let buf = arr[index1]
    console.log(`before`, arr)
    arr[index1] = arr[index2]
    arr[index2] = buf
    console.log(`after`, arr)
}

swap([11, 22, 33, 44], 0, 1)


function exchange(sumUAH, currencyValues, exchangeCurrency) {
    if (exchangeCurrency === 'USD') {
        let usd = sumUAH / 40
        console.log(usd)
    } else if (exchangeCurrency === 'EUR') {
        let euro = sumUAH / 42
        console.log(euro)
    }

}

exchange(10000,40,'USD')