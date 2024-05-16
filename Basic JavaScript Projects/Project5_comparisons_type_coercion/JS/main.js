const num = 5;
const str = "3";
const sum = num + str; // Coerces num to a string and concatenates
document.getElementById("result").textContent = `Result: ${sum}`; // Result: 53

//Nan 
function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;
}

function my_Function1() {
    document.getElementById("Test1").innerHTML = isNaN('string');
}

function my_Function2() {
    document.getElementById("Test2").innerHTML = isNaN('5845');
}

//infinity and -infinity
function myFunction3() {
const largeNumber = 1e303;
const negativeNumber = -1e308;
document.getElementById("result1").innerHTML = 'Infinity: ${largeNumber} | -Infinity: ${negativeNumber}';
}

//infinity and -infinity
function myFunction4() {
     // Assign values for comparison
     const x = 10;
     const y = 5;

     // Check if x is greater than y
     const isXGreaterThanY = x > y;

     // Check if x is less than y
     const isXLessThanY = x < y;

     // Display the results
     document.getElementById("result2").textContent = `x > y: ${isXGreaterThanY} | x < y: ${isXLessThanY}`;
}

console.log(3+3);

// Assign a falsy value (false) to a variable
const isFalse = false;

// Display the value in the console
console.log(isFalse);

//using the == to  2 values
console.log(34 == 0);
console.log(5 == 5);

//using the === 
X = 10;
Y = 10;
console.log(X === Y);


X = 10;
Y = "10";
console.log(X === Y);

X = "Omar";
Y = "Omar";
console.log(X === Y);

//using boolean operators

console.log(5>2 && 20<5);
console.log(14>8 && 20<30);
console.log(5>2 || 20<5);
console.log(5>2 || 20>5);

//using not operator

function not_function() {
    document.getElementById("Not").innerHTML = !(30>5);
}

function not_function1() {
    document.getElementById("Not1").innerHTML = !(30>100);
}
















