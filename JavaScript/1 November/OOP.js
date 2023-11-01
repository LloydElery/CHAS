// GETTERS & SETTERS
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  get cname() {
    return this.carname;
  }
  set cname(x) {
    this.carname = x;
  }
}

// Privata fält & Metoder

class ClassWithPrivate {
  #privateField;
  #privateFieldWithInitializer = 42;
  #privateMethod() {
    // ...
  }
}

// En 'User' mall som tar hand om användarens olika uppgifter
class User {
  #password;

  // Tar emot användarnamn
  // Tar emot email
  // Tar emot password
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.#password = password;
  }

  // Hämtar ett dolt lösenord
  get password() {
    return this.#password;
  }

  // Hämtar 'password' #dolt
  // Hämtar 'username'
  login() {
    return this.#password + this.username;
  }
  set #setPassword(password) {
    this.#password = password;
  }
  changePassword() {
    this.#setPassword;
  }
}

// Skapa en ny 'User'
// Ange 'name', 'email', och 'password'
const newUser = new User('Dennis', 'Dennisjensen@live.com', 'mittLösenord1');
console.log(newUser);
