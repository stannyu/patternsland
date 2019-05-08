/**
 * Builder pattern:
 * Separate the construction of a complex object from its representation
 * so that the same construction process can create different representations.
 */
class Request {
  constructor() {
    this.url = '';
    this.method = '';
    this.payload = {};
  }
}

class RequestPattern {
  constructor() {
    this.request = new Request();
  }
  
  forUrl(url) {
    this.request.url = url;
    return this;
  }
  
  useMethod(method) {
    this.request.method = method;
    return this;
  }
  
  payload(payload) {
    this.request.payload = payload;
    return this;
  }
  
  build() {
    return this.request;
  }
}

export default RequestPattern;

console.warn('BUILDER:');

let a = new RequestPattern();
a.useMethod(logger);

let b = a.build();
b.method();


function logger() {
  console.log('inner method', this);
}
