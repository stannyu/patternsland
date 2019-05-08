/**
 * Abstract Factory pattern
 * Provide an interface for creating families of related or dependent objects without specifying their concrete classes.
 */

function droidProducer(kind) {
  if (kind === 'battle') return battleDroidPattern;
  return pilotDroidPattern;
}

function battleDroidPattern() {
  return new B1();
}

function pilotDroidPattern() {
  return new Rx24();
}

class B1 {
  info() {
    return 'B1, Battle Droid';
  }
}

class Rx24 {
  info() {
    return 'Rx24, Pilot Droid';
  }
}

export default droidProducer;

console.warn('ABSTRACT-FACTORY');

const myDroid = droidProducer("battle")();
let str = myDroid.info();
console.log(str);
