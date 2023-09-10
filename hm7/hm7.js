// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone


function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}


console.log('----------------------------1-------------------------')
// створити пустий масив, наповнити його 10 об'єктами new User(....)


let users = [
    new User(1, 'kolya', 'ivanov', 'kfgjksfd@gmail.com', 102),
    new User(8, 'petya', 'ivanov', 'kfgjksfsdfd@gmail.com', 103),
    new User(5, 'tolya', 'ivanov', 'kfgjfsdksfd@gmail.com', 104),
    new User(4, 'olya', 'ivanov', 'kfgjsgksfd@gmail.com', 106),
    new User(3, 'vasya', 'ivanov', 'kfgagksfd@gmail.com', 101),
    new User(6, 'dima', 'ivanov', 'kfgjasgksfd@gmail.com', 105),
    new User(7, 'erick', 'ivanov', 'kfgjdksfd@gmail.com', 1002),
    new User(2, 'oleg', 'ivanov', 'kfgjkssgafd@gmail.com', 1023),
    new User(9, 'roman', 'ivanov', 'kfgjgsdsfd@gmail.com', 10225),
    new User(10, 'yarik', 'ivanov', 'kfgjkagfdsfd@gmail.com', 109),
]

console.log(users)

console.log('----------------------------2-------------------------')
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)


let filterUser = users.filter(x => x.id % 2 === 0)

console.log(filterUser)


console.log('----------------------------3-------------------------')
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortUser = users.sort((a, b) => a.id - b.id)

console.log(sortUser)


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)


class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order
    }
}


console.log('----------------------------4-------------------------')
// створити пустий масив, наповнити його 10 об'єктами Client


let clients = [
    new Client(2, 'petya', 'ivanov', 'fdsfsjfgdgluk@gmail.com', 380566135274, [213, 236, 1634, 12, 56, 234]),
    new Client(1, 'kolya', 'ivanov', 'fdsfsdgluk@gmail.com', 380562135274, [21312, 56, 234]),
    new Client(5, 'ivan', 'ivanov', 'fdsf123sdgluk@gmail.com', 380566235274, [213, 52, 41]),
    new Client(3, 'stepan', 'ivanov', 'fdsf2sdgluk@gmail.com', 380566135274, [213, 5241, 236, 1634, 12]),
    new Client(4, 'bandera', 'ivanov', 'fdsf423sdgluk@gmail.com', 380566135274, [1634, 12, 56, 234]),
    new Client(7, 'vasya', 'ivanov', 'fdsfsddgluk@gmail.com', 380566135274, [423, 71, 73, 16, 2346]),
    new Client(6, 'dima', 'ivanov', 'fdsfsdsdfgluk@gmail.com', 380566135274, [1543253, 213, 5241, 236, 1634, 12, 56, 234]),
    new Client(9, 'anton', 'ivanov', 'fdsfgasdsdgluk@gmail.com', 380566135274, [213, 5241]),
    new Client(10, 'bodya', 'ivanov', 'fdsfhdfgsdgluk@gmail.com', 380566135274, [234]),
    new Client(8, 'gena', 'ivanov', 'fdsfsjhsdgluk@gmail.com', 380566135274, [3412, 41, 234, 12, 5124, 5123, 532, 5, 12, 6134, 65, 132, 532, 56134, 6134]),
]

console.log(clients)

console.log('----------------------------5-------------------------')
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)


let sortClients = clients.sort((a, b) => a.order.length - b.order.length)


console.log(sortClients)


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


function Car(model, producer, yearCreate, maxSpeed, valueEngine) {
    this.model = model
    this.pruducer = producer
    this.yearCreate = yearCreate
    this.maxSpeed = maxSpeed
    this.valueEngine = valueEngine


    this.drive = function () {
        return console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
    }
    this.info = function () {
        return console.log({model, producer, yearCreate, maxSpeed, valueEngine})
    }
    this.increaseMaxSpeed = function (newSpeed) {
        maxSpeed = newSpeed
        return console.log(`Максимальна швидкість тепер ${maxSpeed}`)
    }
    this.changeYear = function (newValue) {
        yearCreate = newValue
        return console.log(`Тепер рік випуску ${yearCreate}`)
    }
    this.addDriver = function (...drivers) {
        return console.log({drivers})
    }
}

let car1 = new Car('BMW', 'germany', 2020, 200, 300)

console.log('----------------------------6-------------------------')

car1.drive()

console.log('----------------------------6.1-------------------------')

car1.info()

console.log('----------------------------6.2-------------------------')

car1.increaseMaxSpeed(250)

console.log('----------------------------6.3-------------------------')

car1.changeYear(2023)

console.log('----------------------------6.4-------------------------')

car1.addDriver({name: 'vafdsf', age: 21})


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Cars {
    constructor(model, producer, yearCreate, maxSpeed, valueEngine) {
        this.model = model
        this.pruducer = producer
        this.yearCreate = yearCreate
        this.maxSpeed = maxSpeed
        this.valueEngine = valueEngine


        this.drive = function () {
            return console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
        }
        this.info = function () {
            return console.log({model, producer, yearCreate, maxSpeed, valueEngine})
        }
        this.increaseMaxSpeed = function (newSpeed) {
            maxSpeed = newSpeed
            return console.log(`Максимальна швидкість тепер ${maxSpeed}`)
        }
        this.changeYear = function (newValue) {
            yearCreate = newValue
            return console.log(`Тепер рік випуску ${yearCreate}`)
        }
        this.addDriver = function (...drivers) {
            return console.log({drivers})
        }
    }
}


let car2 = new Cars('Mersedes', 'germany', 2019, 160, 250)

console.log('----------------------------7-------------------------')

car2.drive()

console.log('----------------------------7.1-------------------------')

car2.info()

console.log('----------------------------7.2-------------------------')

car2.increaseMaxSpeed(260)

console.log('----------------------------7.3-------------------------')

car2.changeYear(2022)

console.log('----------------------------7.4-------------------------')

car2.addDriver({name: 'petya', age: 25})

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

function Popelushka(name, age, sizeOfLeg) {
    this.name = name
    this.age = age
    this.sizeOfLeg = sizeOfLeg
}


let popelushkas = [
    new Popelushka('olya', 31, 35),
    new Popelushka('sonya', 12, 36),
    new Popelushka('karina', 16, 37),
    new Popelushka('katya', 62, 38),
    new Popelushka('kira', 24, 39),
    new Popelushka('karalina', 34, 40),
    new Popelushka('yana', 21, 41),
    new Popelushka('lyuda', 15, 42),
    new Popelushka('natasha', 23, 43),
    new Popelushka('vika', 39, 44),
]

// console.log(popelushkas)

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {
    constructor(name, age, foundSize) {
        this.name = name
        this.age = age
        this.foundSize = foundSize
    }
}

let prince = new Prince('oleg', 30, 40)

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.


console.log('----------------------------8-------------------------')


for (let i of popelushkas) {
    if (i.sizeOfLeg === prince.foundSize) {
        console.log(i)
    }
}

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


console.log('----------------------------8.1-------------------------')

let prince2 = new Prince('misha',29,38)

console.log(popelushkas.find((x) => x.sizeOfLeg === prince2.foundSize))