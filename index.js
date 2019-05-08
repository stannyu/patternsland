//CREATIONAL
import "./patterns/creational/abstract-factory";
import "./patterns/creational/builder";


const foo = "fooValue";
const btn = document.getElementById("btn");

btn.addEventListener("click", logger);

function logger() {
  console.log({ foo });
}
