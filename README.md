
 # 🚗 Exercice TypeScript : Implémentation d'une Interface Véhicule

     Un petit projet TypeScript démontrant l'utilisation des interfaces et classes, avec implémentation d'un modèle de véhicule.


 ## 📝 Description
 Implémentation d'une interface `Véhicule` et d'une classe `Voiture` respectant le contrat TypeScript, avec :
 - Propriétés basiques (marque, modèle, année)
 - Méthode `start()` pour démarrer le moteur/ - Exemple d'instanciation et d'appel


 ## 🛠️ Technologies

 - TypeScript 5.x

 - Node.js (pour l'exécution)


 ## 📂 Structure du code

 ```typescript
  //1. Définition de l'interface
   /     interface Véhicule {
  /     make: string;
  /     model: string;

year: number;

start(): void;

}

 // 2. Implémentation de la classe
 class Voiture implements Véhicule {
     constructor(
         public make: string,
         public model: string,
         public year: number
     ) {}

     start(): void {
         console.log("Car engine started");
     }
 }

 // 3. Utilisation
 const maVoiture = new Voiture("Toyota", "Corolla", 2020);
 maVoiture.start();