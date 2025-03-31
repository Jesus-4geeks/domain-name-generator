import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function excuseGenerator(variables) {
  let excuse = "";

  for (let v of variables) {
    let randInt = Math.floor(Math.random() * v.length);
    excuse += v[randInt] + ' ';
  }

  // Devolvemos a excusa sin el espacio al final
  return excuse.trim();
}

window.onload = function() {
  //write your code here
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  let variables = [who, action, what, when]
  
  document.getElementById("excuse").innerHTML = excuseGenerator(variables);
};
