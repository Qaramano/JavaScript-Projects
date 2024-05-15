function my_Dictionary() {
    var Car = {
        Brand:"Ford",
        Model: "Explorer",
        Seats: 7,
        Color: "Black",
        Trim:"Sport"
    };
    document.getElementById("Dictionary").innerHTML = Car.Seats;
}

//creat a dictionary

const myDictionary = {
    key1: 'value1',
    key2: 'value2',
    key1: 'newvalue'
};

document.getElementById("result").textContent = JSON.stringify(myDictionary);

//delete operator

function my_Dictionary1() {
    var Car = {
        Brand:"Ford",
        Model: "Explorer",
        Seats: 7,
        Color: "Black",
        Trim:"Sport"
    };
    delete Car.Model;
    document.getElementById("Dictionary1").innerHTML = Car.Model;
}









