/**
 * Adapter pattern:
 * Convert the interface of a class into another interface clients expect.
 * Adapter lets classes work together that couldn't otherwise because of incompatible interfaces.
 */

class Soldier {
  constructor(level) {
    this.level = level;
  }
  
  attack() {
    return this.level * 1;
  }
}

class Jedi {
  constructor(level) {
    this.level = level;
  }
  
  attackWithSaber() {
    return this.level * 100;
  }
}

class JediPattern {
  constructor(jedi) {
    this.jedi = jedi;
  }
  
  attack() {
    return this.jedi.attackWithSaber();
  }
}

export { Soldier, Jedi, JediPattern };

console.warn('ADAPTER: ');

let j = new Jedi(21);
let a = new JediPattern(j);

console.log(a.attack());
