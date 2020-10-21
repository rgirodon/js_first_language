// exo 1
let menu = {
	entree: 'salade',
	
	plat: 'poulet - frites',
	
	dessert: 'fondant chocolat'
};

document.body.textContent = menu.entree + ' * ' + menu.plat + ' * ' + menu.dessert;

// exo 2

class Menu {
    constructor(entree, plat, dessert) {
      
        this.entree = entree;
        this.plat = plat;
        this.dessert = dessert;
    }

    affiche() {
        return(this.entree + ' * ' + this.plat + ' * ' + this.dessert);
    }
}

let menu1 = new Menu('Tomates Mozza', 'Spaghetti bolognaises', 'Ile flottante');

let menu2 = new Menu('Concombres', 'Choucroute', 'Mousse au chocolat');

document.body.textContent = menu1.affiche() + ' / ' + menu2.affiche();
