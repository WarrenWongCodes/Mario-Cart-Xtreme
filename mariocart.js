// Create a gameboard with x and y axis, 10 x 5 dimension board, each 50px
var gameBoard = {
    
}

// Create a object called mario which starts in left edge of road 3, and this connected to keyboard up and down arrow

function mario() {
       document.getElementById('marioChar').onkeydown(40);
    }


// Create a function that dictates where the obstacle will appear on the road according to timer
function obstacle() {
    document.getElementById('obstacle1');
   
}

// when pressing down arrow, move Mario 50 px up
function upArrowPressed(){
    var element = document.getElementById('marioChar');
    element.style.top = parseInt(element.style.top) - 50 + 'px';
}

// when pressing down arrow, move Mario 50 px down
function downArrowPressed(){
    var element = document.getElementById('marioChar');
    element.style.bottom = parseInt(element.style.bottom) + 50 + 'px';
}

// Create a function that calls up and down arrow functions when keycode equals to 38 (up key), 40 (down key) 
function moveDirection(event) {
    switch (event.keyCode) {
        case 38:
        upArrowPressed();
        break;
        case 40:
        downArrowPressed();
        break;
        }
};