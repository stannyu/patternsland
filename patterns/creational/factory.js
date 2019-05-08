/**
 * Factory pattern:
 * Define an interface for creating an object, but let subclasses decide which class to instantiate.
 * Factory Method lets a class defer instantiation to subclasses.
 */

class TeslaPattern {
  create(type) {
    if (type === 'ModelX') return new Tesla(type, 108000, 300);
    if (type === 'ModelS') return new Tesla(type, 111000, 320);
  }
}

class Tesla {
  constructor(model, price, maxSpeed) {
    this.model = model;
    this.price = price;
    this.maxSpeed = maxSpeed;
  }
  
  getValues() {
    console.log('Model is: ', this);
  }
  
}

export default TeslaPattern;

console.warn('FACTORY:');

const teslaConstructor = new TeslaPattern();
const texlaX = teslaConstructor.create('ModelX');

texlaX.getValues();
