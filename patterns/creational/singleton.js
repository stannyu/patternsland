/**
 * Singleton pattern:
 * Ensure a class has only one instance and provide a global point of access to it.
 */

class Person {
  constructor(name) {
    if (typeof Person.instance === 'object') {
      return Person.instance;
    }
    
    this.name = name;
    
    Person.instance = this;
    
    return this;
  }
}

export default Person;

console.warn('SINGLETON: ');

const peppe = new Person('Peppe');
console.log(peppe);

const fred = new Person('Fred');
console.log(fred);
