//this var keeps track of whose turn it is
let activePlayer = 'X';
//this array stores an array of moves we use this to determine win conditions
let selectedSquares = [];

//this fun is for placing an x or o in a square
function placeXorO(squareNumber) {
    //this condition ensure a square hasnt been selected already
    //the ,some() method is used to check each element of the selectSquare array
    //to ss if contains the square number clicked on
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //this var retrieves the html elemnt id that was clicked
        let select = document.getElementById(squareNumber);
        //this condition checks who's turn it is
        if (activePlayer === 'X') {
            //if activePalyer is equal to 'X', the x,png is placed in html
            select.style.backgroundImage = 'url("images/x.png")';
            //active player may only be x or o so if not x it must be o
        } else {
            //if active player is equal to o the o.png is places in html
            select.style.backgroundImage = 'url("images/o.png")';
        }
        //squareNumber and activePlayer are concatenated together and added to array
        selectedSquares.push(squareNumber + activePlayer);
        //this calls a function to check for any win cinditions
        checkWinConditions();
        //this condition is for changing the active player
        if (activePlayer === 'X') {
            //if active player is 'x' change it to o
            activePlayer = 'O';
            //if active player is anything other than x
        } else {
            //hange the active player to x
            activePlayer = 'X';
        }
    
        //this fun plays placement sound
        new Audio('./media/place.mp3');
        //*this condition checks to see if its the computer turn
        if (activePlayer === 'O') {
            //this fun disables clicking for computer turn
            disableClick();
            //this fun waites 1 sec before the computer places an image and enables click
            setTimeout(function () { computersTurn(); }, 1000);
        }
        //returning true is needed for our computersTurn() fun to work
        return true;
    }

    //this fun results in a random square being selected by the computer
    function computersTurn() {
        //this boolean is needed for our while loop
        let success = false;
        //this var stores a random num 0-8
        let pickASquare;
        //this condition allows our while loop to keep trying if a square is selected already
        while (!success) {
            //a random number between 0 and 8 is selected
            pickASquare = String(Math.floor(Math.random() * 9));
            //if the random number evaluated returns true the square hasnt been selected yet
            if (placeXorO(pickASquare)) {
                //this line calls the fun
                placeXorO(pickASquare);
                //this changes our boolean and ends the loop
                success = true;
            };
        }
    }
}
function checkWinConditions() {
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100)}
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304)}
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508)}
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558)}
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558)}
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558)}
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90)}
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520)}
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100)}
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304)}
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508)}
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558)}
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558)}
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558)}
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90)}
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520)}
    else if (selectedSquares.length >= 9) {
        new Audio('./media/tie.mp3');
        setTimeout(function() {resetGame(); }, 500)
    }
    function arrayIncludes(squareA, squareB, squareC){
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        if (a === true && b === true && c === true) {return true;}
    }
}

function resetGame() {
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        square.style.backgroundImage = '';
    }
    selectedSquares = [];
}
function Audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}

function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;


    function animateLineDrawing() {
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0, 0, 608, 608);
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x, y);
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70, 255, 33, 08)';
        c.stroke();
        if (x1 <= x2 && y1<= y2) {
            if (x < x2) {x += 10; }
            if (y < y2) {y += 10; }
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop);}
        }
        if (x1 <= x2 && y1 >= y2) {
        if (x < x2) {x += 10; }
        if (y < y2) {y -= 10; }
        if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop);}
        }
    }

        
    function clear() {
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(animationLoop);
    }
    disableClick();
    audio('./media/winGame.mp3');
    animateLineDrawing();
    setTimeout(function() { clear(); resetGame(); }, 1000);
}    
    
    function disableClick() {
        ReportBody.style.pointerEvents = 'none' ;
        setTimeout(function() { body.style.pointerEvents - 'auto'; }, 1000);
    }























