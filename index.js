import droidProducer from "./patterns/creational/abstract-factory";

console.log('Index JS loaded!');

/**
 * Abstract Factory pattern
 * Provide an interface for creating families of related or dependent objects without specifying their concrete classes.
 */
const myDroid = droidProducer('battle')();
let str = myDroid.info();
console.log(str);
