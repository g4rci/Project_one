
let usersDB = JSON.parse(localStorage.getItem('users'))
let currentUserDB = JSON.parse(localStorage.getItem('currentUser'))

document.getElementById('hello').innerText = `Hola ${currentUserDB.name}`