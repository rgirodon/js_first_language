// exo 1

let a = parseInt(prompt('1er Nombre ?'));

let b = parseInt(prompt('2nd Nombre ?'));

let outputExo1 = '';

if (a < b) {
    outputExo1 = 'Le 1er nombre est inférieur au 2nd nombre';
}
else if (a == b) {
    outputExo1 = 'Les deux nombres sont égaux';
}
else {
    outputExo1 = 'Le 1er nombre est supérieur au 2nd nombre';
}

document.body.textContent = outputExo1;


// exo 2

let correctAnswer = 7;

let userAnswer = parseInt(prompt('Entrez un nombre entre 0 et 10'));

while (userAnswer != correctAnswer) {

    userAnswer = parseInt(prompt('Faux ! Entrez un nombre entre 0 et 10'));
}

let output = 'Correct ! La bonne réponse était effectivement ' + correctAnswer;

document.body.textContent = output;

// exo 3

let chiffres = [10, 15, 20, 15, 14, 8];

let sum = 0;

for (currentChiffre of chiffres) {

    sum = sum + currentChiffre;
}

let output = 'Somme = ' + sum;

document.body.textContent = output;
