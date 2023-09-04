// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині


for (let i = 0; i <= 10;i++) {
    document.write(`<div><p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, explicabo.</p> </div>`)
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

document.write(`<div>------------------------------------------1------------------------------------------------------</div>`)


for (let i = 0; i <= 10; i++) {
    document.write(`<div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, hic.  [${i}]</p></div>`)
}


// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.


document.write(`<div>---------------------------------------------2---------------------------------------------------------------</div>`)
let x = 0

while (x < 20) {
    document.write(`<div><h1>Lorem ipsum dolor sit amet. </h1></div>`)
    x ++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.


document.write(`<div>----------------------------------------------3--------------------------------------------------------------</div>`)


let y = 0

while (y <= 20) {
    document.write(`<div><h1>Lorem ipsum dolor sit amet. [${y}] </h1></div>`);
    y ++;
}

document.write(`<div>--------------------------------------------4----------------------------------------------------------------</div>`)

// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>

document.write(`<ul>`)
for (let i = 0; i < listOfItems.length; i++) {
    document.write(`<li style="font-size: 30px;">${listOfItems[i]}</li>`)
}
document.write(`</ul>`)

document.write(`<div>-------------------------------------------5-----------------------------------------------------------------</div>`)


// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту



for (let i = 0;i <products.length; i++) {
    let product = products[i]
        document.write(`<div>
                        <h3 class="product-title">${product['title']} Prise - ${product['price']}</h3>
                        <img src=${product.image} alt="#" style="width: 300px ">
                        </div>`)

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
// Зі статусом true

console.log('---------------------6-----------------------')


for (let i of users) {
    if (i.status) {
        console.log(i['name'],i['status'])
    }
}

console.log('-------------------7-------------------------')

// Зі статусом false

for (let i of users) {
    if (!i.status) {
        console.log(i['name'], i['status'])
    }
}

console.log('----------------------8-----------------------')

// Більше 30 років

for (let i of users) {
    if (i.age > 30) {
        console.log(i['name'], i['age'])
    }
}