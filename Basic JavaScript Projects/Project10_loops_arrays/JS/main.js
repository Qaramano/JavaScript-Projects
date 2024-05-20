function Call_Loop() {     //while loop
    var count = 0;
    while (count < 5) {
        console.log("Count is: " + count);
        count++;
    }
} 

//length
function text_length() {
var text = "Hello world";
var length = text.length;
console.log("Length of the string: " + length);
}

//for loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//arrays and objects
function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " +
    Cat_Picture[2] + ".";
}

//constant keyword
function Constant_function() {
    const Musical_Instrument = {type: "guitar", brand: "Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " +
    Musical_Instrument.type + " was " + Musical_Instrument.price;

}
//const keyword assignemnt
const myObject = {
    name: "Omar", //changed the value from John to Omar
    age: 30,    // added a property with a value
    city: "New York",
};

function constant_function1() {
    const nameToDisplay = myObject.name;
    const age = myObject.age;
    document.getElementById("Constant1").innerHTML = `Hello, ${nameToDisplay}! Age: ${age}`; //displaying with the added value
}

//let keyword assignement, creating a list of words that ends with specific suffix
function findWords() {
    const inputText = document.getElementById("wordInput").value;
    const suffix = document.getElementById("suffixInput").value;
    const words = inputText.split(" ");
    const filteredWords = words.filter(word => word.endsWith(suffix));
    document.getElementById("result2").textContent = filteredWords.join(", ");
}
    


function multiply(a, b) {
    return a * b;
}

// Call the function and save the return value in 'x'
var x = multiply(4, 3);
document.getElementById("demo").innerHTML = x;


// Create an object using let keyword
let myObject1 = {
    property1: "Hello",
    property2: 42,
    method: function() {
      console.log("This is a method!");
    }
  };
  
  // Accessing properties and calling the method:
  console.log(myObject1.property1); // Outputs: "Hello"
  console.log(myObject1.property2); // Outputs: 42
  myObject1.method(); // Outputs: "This is a method!"

  let text = "";
  for (let i = 0; i < 10; i++) {
      if (i === 3) {
          break;
      }
      text += "The number is " + i + "<br>";``
    }
    console.log(text);

    let text1 = "";
        for (let i = 0; i < 5; i++) {
            if (i === 2) {
                continue;
            }
            text1 += "The number is " + i + "<br>";
        }
        console.log(text1);


















  










