// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log('------------------1----------------')


let findLenght = (str) => {
    let count = 0
    for (let x of str) {
        count++
    }
    console.log(count)
    // console.log(str.length)

}

findLenght('hello world')
findLenght('lorem ipsum')
findLenght('javascript is cool')


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'


console.log('------------------2----------------')

let upperCase = (str) => console.log(str.toUpperCase())
upperCase('hello world')
upperCase('lorem ipsum')
upperCase('javascript is cool')


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log('------------------3----------------')


let lowerCase = (str) => console.log(str.toLowerCase())

lowerCase('HELLO WORLD')
lowerCase('LOREM IPSUM')
lowerCase('JJAVASCRIPT IS COOL')


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.


console.log('------------------4----------------')



let deleteSpace = (str) => console.log(str.slice(1, 13))

deleteSpace(' dirty string   ')


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']


console.log('------------------5----------------')

let createArray = (str) => console.log(str.split(' '))

createArray('Ревуть воли як ясла повні')


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.


console.log('------------------6----------------')


let changeArray = (arr) => arr.map(x => `${x}`)

console.log(changeArray([10, 8, -7, 55, 987, -1011, 0, 1050, 0]));


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]


console.log('------------------7----------------')


let nums = [11, 21, 3]



let sortNums = (nums, direction) => {
    if (direction) {
        nums.sort((a, b) => {
            return a - b
        })
    } else {
        nums.sort((a, b) => {
            return b - a
        })
    }
    console.log(nums)
}

sortNums(nums, true)

// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log('------------------8----------------')


// -- відсортувати його за спаданням за monthDuration

let sortArray = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration)

console.log(sortArray)


console.log('------------------9----------------')

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filterArray = coursesAndDurationArray.filter((array) => array.monthDuration > 4)

console.log(filterArray)


console.log('------------------10----------------')

function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}


let mapArray = coursesAndDurationArray.map((id => id.id = uuidv4()))


console.log(coursesAndDurationArray)


// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}


// =========================


//     описати колоду карт (від 6 до туза без джокерів)
let deck = []


let cardSuit = ['spade', 'diamond', 'heart', 'clubs']

let value = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'       ]

let cards = () => {

    for (let i of cardSuit) {
        for (let k of value) {
            deck.push({
                'cardSuit': i,
                'value': k,
            })
        }
    }
}
cards()
// - знайти піковий туз

console.log('------------------11----------------')

let findClubsAce = (array) => {
    for (let i of array) {
        if (i.cardSuit === 'clubs' && i.value === 'ace') {
            console.log(i)
        }
    }
}
findClubsAce(deck)

// - всі шістки

console.log('------------------12----------------')


let findAllSix = (array) => {
    for (let i of array) {
        if (i.value === '6')
            console.log(i)
    }
}
findAllSix(deck)

// - всі червоні карти

console.log('------------------13----------------')


let findAllReds = (array) => {
    for (let i of array) {
        if (i.cardSuit === 'heart' || i.cardSuit === 'diamond')
            console.log(i)
    }
}
findAllReds(deck)
// - всі буби

console.log('------------------14----------------')

let findAllDiamonds = (array) => {
    for (let i of array) {
        if (i.cardSuit === 'diamond')
            console.log(i)
    }
}
findAllDiamonds(deck)

// - всі трефи від 9 та більше

console.log('------------------15----------------')


let changeNum = (value) => {
    switch (value) {
        case '6' :
            return 6
        case '7' :
            return 7
        case '8' :
            return 8
        case '9' :
            return 9
        case '10' :
            return 10
        case 'jack' :
            return 11
        case 'queen' :
            return 12
        case 'king' :
            return 13
        case 'ace' :
            return 14
    }
}

let findClubsBiggerEight = (array) => {
    for (let i of array) {
        if (i.cardSuit === 'clubs' && changeNum(i.value) >= 9)
            console.log(i)
    }
}
findClubsBiggerEight(deck)


//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================


//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

console.log('------------------16----------------')

let reduce = deck.reduce((array,card) =>{
    switch (card.cardSuit) {
        case 'spade':
            array.spades.push(card);
            break
        case 'diamond':
            array.diamonds.push(card);
            break
        case 'heart':
            array.hearts.push(card);
            break
        case 'clubs':
            array.clubs.push(card)
    }
    return array
},{spades : [],clubs: [], diamonds: [],hearts: []})
console.log(reduce)

// =========================
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


console.log('------------------17----------------')

//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

function findAllObject(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let element of arr[i]['modules']) {
            if (element === 'sass') {
                console.log('Курс sass є в --- ', arr[i]['title'])
            } else if (element === 'docker') {
                console.log('Курс docker є в ---', arr[i]['title'])
            }
        }
    }
}

findAllObject(coursesArray)