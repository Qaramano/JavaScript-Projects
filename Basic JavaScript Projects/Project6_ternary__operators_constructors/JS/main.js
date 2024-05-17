function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ?"You are too short":"You are tall enough;"
    document.getElementById("Ride").innerHTML = Can_ride + "to ride.";
}

//checking volting elegibilty
function checkEligibility() {
    const age = parseInt(document.getElementById("ageInput").value);
    const resultElement = document.getElementById("result");

    // Use a ternary operator to determine eligibility
    const eligibilityMessage = age >= 18 ? "You can vote!" : "You are not old enough to vote";

    resultElement.textContent = eligibilityMessage;
}

//keywords and constructors

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2022, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2024, "Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Cayan");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color +"-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

// Constructor function for creating Person objects
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Create instances using the new keyword
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

console.log(person1); // { name: 'Alice', age: 30 }
console.log(person2); // { name: 'Bob', age: 25 }

function createPerson() {
    const name = document.getElementById("nameInput").value;
    const age = parseInt(document.getElementById("ageInput").value);

    // Create a new Person instance
    const person = new Person(name, age);

    // Display the person's details
    const resultElement = document.getElementById("result1");
    resultElement.textContent = `Name: ${person.name}, Age: ${person.age}`;
}

// Constructor function for creating Person objects
function Person(name, age) {
    this.name = name;
        this.age = age;
    }

    

    function count_Function() {
        document.getElementById("Counting").innerHTML = Count();
        function Count() {
            var Starting_point = 9;
            function Plus_one() {Starting_point +=1;}
            Plus_one();
            return Starting_point;

        }
    }













