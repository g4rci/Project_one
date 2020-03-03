let nickName = document.getElementById("nickName")
let userName = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let repeatPassword = document.getElementById("repeat_password")

let formGroupName = document.getElementById('form-group-name')
let formGroupNickName = document.getElementById('form-group-nickName')
let formGroupEmail = document.getElementById('form-group-email')
let formGroupPassword = document.getElementById('form-group-password')
let formGroupRepeatPassword = document.getElementById('form-group-repeatPassword')



let signUpButton = document.getElementById("signUp");
let logInButton = document.getElementById("log-in-button");
let form = document.getElementById("signIn");
let formWrapper = document.getElementById("errors-container");

let usersDB = JSON.parse(localStorage.getItem('users'))

signUpButton.addEventListener("click", function(event){
    event.preventDefault();
    deleteErrors();
    
    if (checkValidUser()){
        console.log("user registered")
        createUser(userName.value, nickName.value, email.value, password.value)
    };
});

function checkValidUser() {
    let signUpValidator = new SignUpValidator (userName.value, nickName.value, email.value, password.value, repeatPassword.value);
 
    let usersDB = JSON.parse(localStorage.getItem("users"));
    let validUser = true;

    if(!signUpValidator.checkUserName()){
        signUpValidator.errorCreator("Por favor, introduce un nombre válido", formGroupName)
        validUser=false
    }
    if(!signUpValidator.checkNickName()){
        signUpValidator.errorCreator("Por favor, introduce un nickName válido", formGroupNickName)
        validUser=false
    }
    if(!signUpValidator.checkEmail()){
        signUpValidator.errorCreator("Por favor, introduce una dirección de mail válida", formGroupEmail)
        validUser=false
    }
    if(!signUpValidator.checkPassword()){
        signUpValidator.errorCreator("Por favor, introduce una contraseña válida", formGroupPassword)
        validUser=false
    }
    if(!signUpValidator.checkRepeatPassword()){
        signUpValidator.errorCreator("Las contraseñas no coinciden", formGroupRepeatPassword)
        validUser=false
   }
    if (!signUpValidator.checkEmailInDB(usersDB)){
        signUpValidator.errorCreator("Este mail ya existe", formGroupEmail)
        validUser=false
    }

    return validUser
}

function deleteErrors (){
    let errors = [...document.getElementsByClassName("error")]
    errors ? errors.forEach(error => error.remove()) : null;
}

function createUser (userName, nickName, email, password) {
    const newUser = new User (userName, nickName, email, password)

    if (usersDB){
        usersDB.push(newUser);
    } else {
        usersDB = [newUser]
    }
    localStorage.setItem('users', JSON.stringify(usersDB));
};
