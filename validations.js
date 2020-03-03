

class Validator {
    constructor(userName, nickName, email, password){
        this.userName = userName;
        this.nickName = nickName
        this.email = email;
        this.password = password;
    }

    checkUserName () {
        return this.userName ? true : false
    }

    checkNickName () {
        return this.nickName ? true : false
    }

    checkEmail () {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(this.email) ? true : false
    }

    checkPassword () {
        if (!this.password){
            return false
        } else if (this.password.length < 2){
            return false
        } else {
            return true
        }
    }
    
    errorCreator (message, location) {
        let div = document.createElement("div")
        div.setAttribute("class", "error")
        div.innerHTML = message
        form.insertBefore(div, location)

        // traer todos los form group del formulario
        //crear un array con esa variable
        // recorer con un foreach y verificar si uno de estos elementos tiene un hijo en la posicion 1 input con un atributo id que coincida === con el atributo id de location
        //antes de ese input hacemos el insertBefore
    }

    deleteErrors (){
        let errors = [...document.getElementsByClassName("error")]
        errors ? errors.forEach(error => error.remove()) : null;
    }
}

class SignUpValidator extends Validator {
    constructor (userName, nickName, email, password, repeatPassword){
        super(userName, nickName, email, password);
        this.repeatPassword = repeatPassword
    }

    checkEmailInDB (usersDB){
        let userExists = true;

        if (!usersDB){
            return true;
        }
        else{
            usersDB.forEach(user => {
                if (user.email === this.email){
                    userExists=false
                }
            })
        }
        return userExists;
    }

    checkRepeatPassword () {
        if(this.password === this.repeatPassword) {
            return true;
        } else {
            return false;
        } 
    }
}

class LogInValidator extends Validator {
    constructor (){
        super();
    }

    checkEmailInDB (string){
        if (!userDB){
            return false
        }
        else{
            userDB.forEach(user => {
                if (user.email === string){return true}
            })
        }
        return false
    }

}