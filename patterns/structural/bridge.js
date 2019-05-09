/**
 * Bridge pattern:
 * Decouple an abstraction from its implementation so that the two can vary independently.
 */

class Printer {
  constructor(ink) {
    this.ink = ink;
  }
}

class EpsonPrinter extends Printer {
  constructor(ink) {
    super(ink);
  }
  
  print() {
    return 'Printer: Epson, Ink: ' + this.ink.get();
  }
}

class HPprinter extends Printer {
  constructor(ink) {
    super(ink);
  }
  
  print() {
    return 'Printer: HP, Ink: ' + this.ink.get();
  }
}

class Ink {
  constructor(type) {
    this.type = type;
  }
  
  get() {
    return this.type;
  }
}

class AcrylicInk extends Ink {
  constructor() {
    super('acrylic-based');
  }
}

class AlcoholInk extends Ink {
  constructor() {
    super('alcohol-based');
  }
}

export { EpsonPrinter, HPprinter, AcrylicInk, AlcoholInk };

console.warn('BRIDGE: ');

const hpInk = new AcrylicInk();
console.log(hpInk.get());

const hpPrinter = new HPprinter(hpInk);
console.log(hpPrinter.print());
