import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let extensions = ['com', 'net', 'us', 'io'];

  let domainNames = [];

  for (let p in pronoun) {
    for (let a in adj) {
      for (let n in noun) {
        domainNames.push(pronoun[p] + adj[a] + '.' + noun[n]);

        for (let ext in extensions) {
          domainNames.push(pronoun[p] + adj[a] + noun[n] + '.' + extensions[ext]);
        }
      }
    }
  }
  
  for (let elem in domainNames) {
    console.log(domainNames[elem]);
  }
};
