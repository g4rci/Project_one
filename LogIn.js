
let logInButton = document.getElementById('log-in-button')
let email = document.getElementById("email");
let password = document.getElementById("password");
let usersDB = JSON.parse(localStorage.getItem('users'))
let currentUserDB = JSON.parse(localStorage.getItem('currentUser'))
let helloMesage = document.getElementById('hello')



logInButton.addEventListener("click", function(event){
    event.preventDefault();
    //console.log(currentUserDB)
    
    for (let i=0; i<usersDB.length; i++){
       if (usersDB[i].email === email.value && usersDB[i].password === password.value){
           createCurrentUser(usersDB[i]);
          window.location.href = 'index.html'
          
       }
    }
});

function createCurrentUser (currentUser) {
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    console.log(currentUserDB);
    
};
//hello
