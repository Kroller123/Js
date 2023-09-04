/* Масиви та об'єкти:
- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль */
let trash = [10,2,'hello',163,`156`,true,5432534,126,152,'okten'];

/*
for (let k = 0; k < trash.length; k++) {
    console.log(trash[k])
 }
*/


console.log(trash[0]);
console.log(trash[1]);
console.log(trash[2]);
console.log(trash[3]);
console.log(trash[4]);
console.log(trash[5]);
console.log(trash[6]);
console.log(trash[7]);
console.log(trash[8]);
console.log(trash[9]);

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let books = {
    title : 'Lord of the ring',
    pageCount : '25',
    genre : 'fantasy'
}

console.log(books)

//  Створити 3 об'єкти які описують книги.
//  Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let booksNum2 = {
    title : 'Black Rada',
    pageCount : '41',
    genre : 'novel',
    author : {
        name : ['vasya', 'olya'],
        age : ['23', '19']
    }
}
console.log(booksNum2)


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача

let users = [
    {name : 'Oliver', username : 'Wonnd', password : '876CnsgLD4'},
    {name : 'Jon', username : 'Yllda', password : '85e45FbhYN'},
    {name : 'Conor', username : 'Juran', password : '45CC5ivjL2'},
    {name : 'Kit', username : 'Ikari', password : 'vU2f24H5Pc'},
    {name : 'Kira', username : 'Uizad', password : '9rP4G3Ex9n'},
    {name : 'Brecham', username : 'Mokil', password : '69Ys2gjEM4'},
    {name : 'Olena', username : 'Yrybb', password : 'sM356F3Avb'},
    {name : 'Lesya', username : 'Pepli', password : '3j68Y2VpNx'},
    {name : 'Thomas', username : 'Anila', password : '46BrY4cu2K'},
    {name : 'George', username : 'Kroller', password : 'm677yL8aTN'}
]

/*
for (let i = 0; i < users.length; i++) {
     console.log(users[i]["password"])
}
*/


console.log(users[0]["password"])
console.log(users[1]["password"])
console.log(users[2]["password"])
console.log(users[3]["password"])
console.log(users[4]["password"])
console.log(users[5]["password"])
console.log(users[6]["password"])
console.log(users[7]["password"])
console.log(users[8]["password"])
console.log(users[9]["password"])


// Логічні розгалуження:

/* - Є змінна х, якій ви надаєте довільне числове значення.
   Якщо змінна x не дорівнює нулю, виведіть 'Вірно',
   інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3 */


let x = 1

if (x != 0) {
    console.log('Вірно')
} else {
    console.log('Не вірно')
}


/* - Дано змінну time яка рівна числу від 0 до 59.
 Потрібно написати код, який перевірить, до якої четверті години попадає число
 (в першу, другу, третю или четверту частину години). */

let time = +prompt('Enter time')

switch (true) {
    case (time <= 15):
        console.log('Перша четверть');
        break
    case (time <= 30):
        console.log('Друга четверть');
        break
    case (time <= 45):
        console.log('Третя четверть');
        break
    case (time <= 60):
        console.log('Четверта четверть');
        break
    default:
        console.log('Введіть правильну цифру')
}


/* - У змінній day дано якесь число від 1 до 31.
 Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю). */

let day = +prompt('Enter day')

switch (true) {
    case (day <= 10):
        console.log('Перша половина декаду');
        break
    case (day <= 20):
        console.log('Друга половина декаду');
        break
    case (day <= 31):
        console.log('Третя половина декаду');
        break
    default:
        console.log('Введіть коректно дату')
}

/*    - Скласти розклад на тиждень за домопоги switch.
    Користувач вводить порядковий номердня тижня і на екрані відображається інфа що заплановано на цей день
    (можна замість плану на день, назву дня англійською). */

let num = +prompt('Enter num untill 7')

switch (true) {
    case (num == 1):
        console.log('Понеділок');
        break
    case (num == 2):
        console.log('Вівторок');
        break
    case (num == 3):
        console.log('Середа');
        break
    case (num == 4):
        console.log('Четвер');
        break
    case (num == 5):
        console.log('Пятниця');
        break
    case (num == 6):
        console.log('Субота');
        break
    case (num == 7):
        console.log('Неділя');
        break
    default:
        console.log('Введіть коректну цифру')
}

/*    - Користувач вводить або має два числа.
    Потрібно знайти та вивести максимальне число з тих двох .
    Також потрібно врахувати коли введені рівні числа. */

let numOne = +prompt('Enter first num')
let numTwo = +prompt('Enter second num')

switch (true) {
    case (numOne > numTwo):
        console.log('Перше чісло більше');
        break
    case (numOne < numTwo):
        console.log('Друге чісло більше');
        break
    default:
        console.log('Вони рівні')
}

/*    - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
    за допомоги  оператора || буде присвоювати змінній х значення "default"
    якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false) */

let any = +prompt('enter') || 'default'

console.log(any)

/*    - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
   За допомоги іф перевірити кожен його  елемент натривалість навчання.
   У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер" */


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
]

/*
for (let j = 0; j < coursesAndDurationArray.length; j++) {
     let course = coursesAndDurationArray[j]
     if (course.monthDuration > 5) {
        console.log(course.title);
        console.log('Супер')
    }
 }
*/

// JavaScript Complex //

let jsc = coursesAndDurationArray[0]

if (jsc.monthDuration > 5) {
    console.log(jsc.title);
    console.log('Супер')
}

// Java Complex //

let jc = coursesAndDurationArray[1]

if (jc.monthDuration > 5) {
    console.log(jc.title);
    console.log('Супер');
}

// Python Complex //

let pc = coursesAndDurationArray[2]

if (pc.monthDuration > 5) {
    console.log(pc.title);
    console.log('Супер');
}

// QA Complex //

let qAc = coursesAndDurationArray[3]

if (qAc.monthDuration > 5) {
    console.log(qAc.title);
    console.log('Супер');
}

// FullStack //

let fullStack = coursesAndDurationArray[4]

if (fullStack.monthDuration > 5) {
    console.log(fullStack.title);
    console.log('Супер');
}

// Frontend //

let fronted = coursesAndDurationArray[5]

if (fronted.monthDuration > 5) {
    console.log(fronted.title);
    console.log('Супер');
}
