let moveBy = 50;

// when pressing down arrow, move Mario 50 px up
function upArrowPressed(){
    var element = document.getElementById("marioChar");
    element.style.top = parseInt(element.style.top) - moveBy + 'px';
}

// when pressing down arrow, move Mario 50 px down
function downArrowPressed(){
    var element = document.getElementById("marioChar");
    element.style.top = parseInt(element.style.top) + moveBy + 'px';
}

// Create a function that calls up and down arrow functions when keycode equals to 38 (up key), 40 (down key) 
function moveDirection(event) {
    switch (event.key) {
        case "ArrowUp":
            upArrowPressed();
            break;
        case "ArrowDown":
            downArrowPressed();
            break;
        }
};

// Create a function that executes when the body loads, linking up and down key functions
function gameStart(){
    window.addEventListener("keydown", moveDirection);
}
