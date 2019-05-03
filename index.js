//CREATIONAL
import "./patterns/creational/abstract-factory";


const foo = "fooValue";
const btn = document.getElementById("btn");

btn.addEventListener("click", logger);

function logger() {
  console.log({ foo });
}
