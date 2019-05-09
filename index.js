//CREATIONAL
// import "./patterns/creational/abstract-factory";
// import "./patterns/creational/builder";
// import "./patterns/creational/factory";
// import "./patterns/creational/prototype";
// import "./patterns/creational/singleton";

//STRUCTURAL
import "./patterns/structural/adapter";
import "./patterns/structural/bridge";


const foo = "fooValue";
const btn = document.getElementById("btn");

btn.addEventListener("click", logger);

function logger() {
  console.log({ foo });
}
