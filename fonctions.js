// exo 0
function multiply(param1, param2) {

    let result = param1 * param2;

    return result;
}

let nb1 = multiply(5, 6);

let nb2 = multiply(5, 2);

let output = multiply(nb1, nb2);

document.body.textContent = output;


// exo 1
function sum(chiffres) {

    let result = 0;

    for (let chiffre of chiffres) {

        result += chiffre;
    }

    return result;
}

let tab = [8, 9, 10];

let output1 = 'Somme = ' + sum(tab);

document.body.textContent = output1;


// exo 2
function max(chiffres) {

    let max = null;

    for (let chiffre of chiffres) {

        if (max == null || chiffre > max) {
        
            max = chiffre;
        }
    }

    return max;
}

let tab = [10, 22, 3, 41, 5, 55, 77, 1];

let output1 = 'Max = ' + max(tab);

document.body.textContent = output1;