// Exo 1

function ask(question, ok, cancel) {

	let reponse = confirm(question);
  
	if (reponse) {
  	
		document.body.textContent = ok();
	}
	else {
		document.body.textContent = cancel();
	}
}

function showOk() {
	return('Ca va, merci !');
}

function showCancel() {
	return('Bof bof, ça ira mieux demain !');
}

ask('Vous allez bien ?', showOk, showCancel);

function sing() {
	return('La la laaaa');
}

function cry() {
	return('Bouhhhhhh');
}

ask('Vous allez bien ?', sing, cry);

// Exo 2

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function estPair(number) {

    return(number % 2 == 0);
}

let filteredArray = array.filter(estPair);

let msg = '';

function appendToMsg(number) {

    msg += number + ' ';
}

filteredArray.forEach(appendToMsg);

document.body.textContent = msg;