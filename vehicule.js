// Implémentation de la classe Voiture
var Vehicule = /** @class */ (function () {
    // Constructeur de la classe Voiture
    function Vehicule(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Vehicule.prototype.start = function () { //appel de la méthode start
        console.log("Car engine started");
    };
    return Vehicule;
}());
// Création d'une instance de Voiture
var maVoiture = new Vehicule("Toyota", "Corolla", 2020);
// Appel de la méthode start
maVoiture.start();
