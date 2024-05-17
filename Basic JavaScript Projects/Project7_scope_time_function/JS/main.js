// Global variable
const globalVar = "I am global!";

// Access it anywhere in your code
console.log(globalVar);


function myFunction() {
    // Local variable
    const localVar = "I am local!";
    console.log(localVar);
}

myFunction(); // Call the function to see the output

function divide(a, b) {
    // Intentional error: dividing by zero
    return a / b;
}

const result = divide(10, 0); // This will cause an error
console.log(result); // Debugging: check the console for the error message

//new date gethours method
function getCurrentHour() {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    return currentHour;
}

// Example usage:
const hourNow = getCurrentHour();
console.log(`The current hour is: ${hourNow}`);

// document.getelementbyid method
const myElement = document.getElementById("myParagraph");
myElement.style.color = "red"; // Change the color to red

//if statment
function checkLetter() {
    const letter = document.getElementById("myInput").value;
    let text;

    if (letter === "c") {
        text = "You entered the letter 'c'.";
    } else {
        text = "Waaay off...";
    }

    document.getElementById("result").innerHTML = text;
}

//else statement
function checkValue() {
    const inputValue = document.getElementById("myInput").value;
    const result1Element = document.getElementById("result1");

    if (inputValue === "something") {
        result1Element.textContent = "You entered 'something'.";
    } else {
        result1Element.textContent = "Try again!";
    }
}

//else if statement
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

