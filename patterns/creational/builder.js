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

let a = new RequestPattern();
a.useMethod(()=>console.log('inner method'));
let b = a.build();
console.log(b);
b.method();
