function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function convertToUppercase() {
    const inputText = document.getElementById("myInput").value;
    const uppercaseText = inputText.toUpperCase();
    document.getElementById("result").textContent = uppercaseText;
}

function search() {
    const input = document.getElementById('searchbar').value.toLowerCase();
    // Perform your search logic here (e.g., filter a list, search a database, etc.)
    // You can use the 'input' value to match against your data.
    // For demonstration purposes, let's just log the input:
    console.log('User searched for:', input);
}

function string_Method() {
    var X = 524542;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var Y = 52103624.51688498442;
    document.getElementById("Precision").innerHTML = Y.toPrecision(15);
}

function convertToFixed() {
    const inputNumber = parseFloat(document.getElementById('numberInput').value);
    if (!isNaN(inputNumber)) {
        const fixedString = inputNumber.toFixed(2); // Convert to 2 decimal places
        alert(`Converted value: ${fixedString}`);
    } else {
        alert('Please enter a valid number.');
    }
}

let text = new String("Hello World!");
let result1 = text.valueOf(); // Equivalent to just 'text'
console.log(result1); // Outputs: Hello World!


















































