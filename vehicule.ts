// Définition de l'interface Véhicule
interface Véhicule {
    make: string;
    model: string;
    year: number;
    start(): void;
}

// Implémentation de la classe Voiture
class Voiture implements Véhicule {
    make: string;
    model: string;
    year: number;

    // Constructeur de la classe Voiture
    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start(): void {
        console.log("Car engine started");
    }
}

// Création d'une instance de Voiture
const monVehicule = new Voiture("Toyota", "Corolla", 2020);

// Appel de la méthode start
monVehicule.start();