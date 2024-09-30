/*
// exo 1
let menu1 = {
	entree: 'salade',
	
	plat: 'poulet - frites',
	
	dessert: 'fondant chocolat'
};

let menu2 = {
	entree: 'oeuf mimosa',
	
	plat: 'pâtes carbonara',
	
	dessert: 'tarte au citron'
};

menu2.fromage = "fourme";

document.body.innerHTML = menu1.entree + ' * ' + menu1.plat + ' * ' + menu1.dessert + " // " + menu2.entree + ' * ' + menu2.plat + ' * ' + menu2.dessert;


let menu3 = {};

menu3.entree = "omelette";

menu3.plat = "escalope de dinde - petits pois";

menu3.fromage = "emmental";

document.body.innerHTML = menu3.entree + ' * ' + menu3.plat + ' * ' + menu3.fromage;


let user1 = {
    firstname: "Rémy",
    lastname: "Girodon",
    address: {
        street: "25 rue des Coquelicots",
        town: "St-Etienne",
        zipcode: "42100"
    },
    hobbies: ["Football", "Reading"]
};

let user2 = {
    firstname: "Jean",
    lastname: "Durand",
    address: {
        street: "24 rue des Oeillets",
        town: "Lyon",
        zipcode: "69009"
    },
    hobbies: ["Rugby", "Cooking", "Movies"]
};

let users = [user1, user2];

document.body.innerHTML = users[1].address.town + " " + users[0].hobbies[0];
*/



// exo 2
class Menu {
    constructor(p_entree, p_plat, p_dessert) {
      
        this.entree = p_entree;
        this.plat = p_plat;
        this.dessert = p_dessert;
    }

    affiche() {
        return(this.entree + ' * ' + this.plat + ' * ' + this.dessert);
    }
}

let menu1 = new Menu('Tomates Mozza', 'Spaghetti bolognaises', 'Ile flottante');

let menu2 = new Menu('Concombres', 'Choucroute', 'Mousse au chocolat');

let menu3 = new Menu("Crevettes", "Cabillaud - riz", "Salade de fruits");

document.body.innerHTML = menu1.affiche() + ' / ' + menu2.affiche()+ ' / ' + menu3.affiche();


class Book {
    constructor(p_title, p_author, p_year) {
        this.title = p_title;
        this.author = p_author;
        this.year = p_year;
    }

    affiche() {
        return(this.title + ", written by " + this.author + ", in " + this.year); 
    }
}

let book1 = new Book("Les Fables de La Fontaine", "La Fontaine", 1668);

let book2 = new Book("Le Comte de Monte Cristo", "Alexandre Dumas", 1846);

document.body.innerHTML = book1.affiche() + " // " + book2.affiche();