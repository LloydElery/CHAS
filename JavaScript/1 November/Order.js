// Skapar mallen 'Order'
class Order {
  #orderNumber;
  #totalPrice = 0;

  constructor(orderNumber) {
    this.#orderNumber = orderNumber;
  }

  // Getter for order number
  get orderNumber() {
    return this.#orderNumber;
  }

  // Getter for total price
  get totalPrice() {
    return this.#totalPrice;
  }

  // Metod
  // Calculate the total price based on item count
  calculateTotalPrice(itemOne, itemTwo) {
    this.#totalPrice = itemOne + itemTwo;
  }
}

// Example usage:
const order = new Order('12345');

// Går inte då orderNumber är '#' privat
order.orderNumber = '998877';
// -> 12345

order.calculateTotalPrice(300, 43); // Calculate total price
// -> 343

// En ny order kalkyleras men även denna räknar bara på 2 items.
order.calculateTotalPrice(45, 68, 567);
// -> 113
console.log('Order Number:', order.orderNumber);
console.log('Total Price:', order.totalPrice);
