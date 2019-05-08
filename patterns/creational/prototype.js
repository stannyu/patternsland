/**
 * Prototype pattern:
 * Specify the kind of objects to create using a prototypical instance,
 * and create new objects by copying this prototype.
 */

class Sheep {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }
  
  clone() {
    return new Sheep(this.name, this.weight);
  }
  
  getSheep() {
    console.log(this.name, this.weight);
  }
}

export default Sheep;

console.warn('PROTOTYPE:');

const dollySheep = new Sheep("Dolly", '15kg');
dollySheep.getSheep();

let newSheep = dollySheep.clone();
newSheep.getSheep();
