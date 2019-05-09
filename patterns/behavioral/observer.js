/**
 * Observer pattern:
 * Define a one-to-many dependency between objects so that when one object changes state,
 * all its dependents are notified and updated automatically.
 */

class Product {
  constructor() {
    this.price = 0;
    this.actions = [];
  }
  
  setBasePrice(val) {
    this.price = val;
    this.notifyAll();
  }
  
  register(observer) {
    this.actions.push(observer);
  }
  
  unregister(observer) {
    this.actions.remove.filter(function(el) {
      return el !== observer;
    });
  }
  
  notifyAll() {
    return this.actions.forEach(
      function(el) {
        el.update(this);
      }.bind(this)
    );
  }
}

class fees {
  update(product) {
    product.price = product.price * 1.2;
  }
}

class profit {
  update(product) {
    product.price = product.price * 2;
  }
}

export { Product, fees, profit };

console.warn('OBSERVER: ');

const customProduct = new Product();
customProduct.setBasePrice(12.5);

console.log(customProduct);

const observer1 = new fees();
const observer2 = new profit();
customProduct.register(observer1);
customProduct.register(observer2);

observer1.update(customProduct);
observer2.update(customProduct);

console.log(customProduct);

