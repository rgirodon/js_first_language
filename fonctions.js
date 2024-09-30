/*
// exo 0
function multiply(param1, param2) {

    let result = param1 * param2;

    return result;
}

function computeDouble(param1) {

    return multiply(2, param1);
}

let nb1 = multiply(5, 6);

let nb2 = multiply(5, 2);

let output = multiply(nb1, nb2);

output = computeDouble(output);

document.body.innerHTML = output;
*/

/*
// exo 1
function computeSum(chiffres) {

    let result = 0;

    for (let chiffre of chiffres) {

        result += chiffre;
    }

    return result;
}

let tab1 = [7, 8, 9, 10];

let output1 = 'Somme = ' + computeSum(tab1);

let tab2 = [5, 21, 47, 12];

let output2 = 'Somme = ' + computeSum(tab2);

document.body.innerHTML = output1 + " // " + output2;
*/


// exo 2
function max(chiffres) {

    let max = null;

    for (let chiffre of chiffres) {

        if ((max == null) || (chiffre > max)) {
        
            max = chiffre;
        }
    }

    return max;
}

function min(chiffres) {

    let min = null;

    for (let chiffre of chiffres) {

        if ((min == null) || (chiffre < min)) {
        
            min = chiffre;
        }
    }

    return min;
}

let tab = [10, 22, 3, 41, 5, 55, 77, 1];

let output1 = 'Max = ' + max(tab) + " // Min = " + min(tab);

document.body.innerHTML = output1;