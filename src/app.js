import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function partGenerator(variable) {
  let randInt = Math.floor(Math.random() * variable.length);
  return variable[randInt] + ' ';
}

window.onload = function() {
  //write your code here
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  let excuse = "";

  excuse += partGenerator(who);
  excuse += partGenerator(action);
  excuse += partGenerator(what);
  excuse += partGenerator(when);
  
  document.getElementById("excuse").innerHTML = excuse.trim();
};
