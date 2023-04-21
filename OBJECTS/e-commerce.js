// Let's say you are building an e-commerce website that sells various products. 
// You have a Product class that represents each product
class Product {
  constructor(name, id, price) {
    this.name = name;
    this.id = id;
    this.price = price;
  }
};

// DiscountedProduct class extends Product and adds a discount property
class DiscountedProduct extends Product {
  constructor(name, id, price, discount) {
    super(name, id, price);
    this.discount = discount;
  }
  get discountedPrice() {
    return this.price - this.discount;
  }
};

// You want to implement shopping cart feature that allows users to add products to their cart and check out
class ShoppingCart {
  constructor() {
    // it is an array of Product objects
    this.items = [];
  }
  addItem(item) {
    this.items.push(item);
  }
  // you can use polymorphism to create method that works for any Product objects
  calculateTotalCost() {
    let total = 0;
    this.items.forEach(item => {
      if (item instanceof DiscountedProduct) {
        total += item.discountedPrice;
      } else {
        total += item.price;
      }
    });
    return total;
  }
};

const cart = new ShoppingCart();
  cart.addItem(new Product('radio receiver', 'RC205', 27));
  cart.addItem(new Product('radio remote', 'RR105', 12));
  cart.addItem(new DiscountedProduct('photocells', 'IR33', 18, 6));
console.log(cart.calculateTotalCost()); // => 51

const garageMotor = new DiscountedProduct('garage motor', 'GM800', 150, 31);
  console.log(garageMotor instanceof DiscountedProduct); // => true
  cart.addItem(garageMotor);
console.log(cart.calculateTotalCost()); // => 170
