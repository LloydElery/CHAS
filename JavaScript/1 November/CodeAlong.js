class User {
  username;
  email;

  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  displayInfo() {
    console.log(this.username + ' ' + this.email);
  }
}

class Merchant extends User {
  businessName;

  constructor(username, email, businessName) {
    super(username, email);
    this.businessName = businessName;
  }

  displayInfo() {
    super.displayInfo();
    console.log(this.businessName);
  }
}

class Customer extends User {
  loyaltyPoints;

  constructor(username, email, loyaltyPoints) {
    super(username, email);
    this.loyaltyPoints = loyaltyPoints;
  }

  displayInfo() {
    super.displayInfo();
    console.log(this.loyaltyPoints);
  }
}

const newUser = new User('DennisJensen', 'Dennisjensen@live.com');
newUser.displayInfo();
const ICA = new Merchant('ICA-Steve', 'Steve@ica.se', 'ICA');
ICA.displayInfo();
const newCustomer = new Customer('Fredde Klåfinger', 'TöntFredde@penis.se', -34);
newCustomer.displayInfo();
