class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    speak() {
        return `${this.name} says ${this.sound}`; // Method to return a string describing the animal's sound
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name, "Woof"); // Calls the parent constructor with the name and a default sound for dogs
        this.tricks = []; // Initializes an array to store the dog's tricks
    }

    learnTrick(trick) {
        this.tricks.push(trick); // Adds a new trick to the dog's tricks array
    }

    showTricks() {
        return `${this.name} knows the following tricks: ${this.tricks.join(", ")}`; // Method to return a string listing the dog's tricks
    }
}

const dog = new Dog("Dexter"); // Creates a new Dog instance named Dexter
console.log(dog.speak()); // Logs "Dexter says Woof"

dog.learnTrick("sit"); // Adds the "sit" trick to Dexter's tricks
dog.learnTrick("roll over"); // Adds the "roll over" trick to Dexter's tricks
dog.learnTrick("shake"); // Adds the "shake" trick to Dexter's tricks
console.log(dog.showTricks()); // Logs "Dexter knows the following tricks: sit, roll over, shake"
