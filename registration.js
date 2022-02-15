class User {
    constructor(username , email , number, password){
        this.username = username;
        this.email = email;
        this.number = number;
        this.password = password;
        this.id = Math.random().toString().split('.')[1]
    }

    register(users){
        users.push(this);
    }
}


const name = document.querySelector('#username');
const email = document.querySelector('#email');
const number = document.querySelector('#number');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const btn = document.getElementById('#btn');




if(btn){
    btn.addEventListener('click', event => {
        event.preventDefault()
        if (name.value !== "" && email.value !== "" && number.value !== ""  && password.value !== "" && password.value === password2.value) {
            registerUser({
                username: name.value,
                email: email.value,
                number: number.value,
                password: password.value
            }) 
            new Swal("Registered!")
        } else {
            new Swal("Not all input is filled or the password is not matching!")
        }
        name.value ="";
        email.value = "";
        number.value = "";
        password.value = "";
        password2.value = "";
    });
}


function registerUser(obj){
    let users;
    if(localStorage['users']){
        users = JSON.parse(localStorage['users'])
    } else {
        users = [];
    }
    const {username , email , number , password} = obj;
    const user = new User(username , email , number , password);
    user.register(users)
    localStorage.setItem('users' , JSON.stringify(users))
}

//login

