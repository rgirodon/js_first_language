let _ = require('lodash');

let array = _.words('Javascript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs avec l\'utilisation (par exemple) de Nodejs');

for (let word of array) {
    console.log(word);
}