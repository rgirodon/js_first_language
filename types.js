let nom = "Rémy Girodon";

let age = 46;

let estMajeur = true;

let hobbys = ['Cuisine', 'Football', 'Lecture', 'Musique', 'Cinéma'];

let childrenAge = [13, 16];

let msg = '<p>Nom : ' + nom + "</p>";

msg += '<p>Age : ' + age + "</p>";

msg += '<p>Hobby préféré : ' + hobbys[0] + "</p>";

msg += "<p>Age des enfants : " + childrenAge[0] + " - " + childrenAge[1] + "</p>";

document.body.innerHTML = msg;