class User {
   
    constructor(name, userName, password){
        this.name = name;
        this.userName = userName;
        this.password = password;
    }

    login(userName, password) {
        if (userName === this.userName && password === this.password) {
            console.log('Login Successfully');
        } else {
            console.log('Authentication Failed!!');
        }
    }

   
};

const nehal = new User('Nehal Mahida', 'nehal_mahida', 'password:)');
const js = new User('JavaScript', 'js' ,'python:)');


nehal.login('nehal_mahida', 'password:)'); // Login succcessfully
js.login('js', 'python:)'); // Login successfully

console.log(nehal.name); // Nehal Mahida
console.log(nehal.password); // undefined
//   console.log(nehal.#password); // Syntax Error

nehal.login('nehal_mahida', 'password:)'); // Authentication Failed!!
nehal.login('nehal-mahida', 'new_password:)'); // Login Successfully