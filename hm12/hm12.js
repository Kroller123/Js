// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку,
// на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит
// https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача


fetch('http://jsonplaceholder.typicode.com/users').then(js => js.json())
    .then(value => {
        let ul = document.getElementById('ul')
        for (let i of value) {
            let li = document.createElement('li')
            let a = document.createElement('a')

            a.innerText = `${i.id} --- ${i.name}`
            a.href = 'user-derails.html?value=' + JSON.stringify(i)

            li.append(a)
            ul.append(li)
        }
    })

