let pronouns = ['the', 'our'];
let adjectives = ['great', 'big'];
let nouns = ['jogger', 'racoon'];
let extensions = ['com', 'net', 'us', 'io'];

let domainNames = [];

for (let pronoun of pronouns) {
  for (let adjective of adjectives) {
    for (let noun of nouns) {
      domainNames.push(pronoun + adjective + '.' + noun);

      for (let extension of extensions) {
        domainNames.push(pronoun + adjective + noun + '.' + extension);
      }
    }
  }
}

for (let domain of domainNames) {
  console.log(domain);
}
