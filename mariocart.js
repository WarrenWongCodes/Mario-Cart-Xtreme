var moveBy = 50;
var topPos = 0;

// when pressing down arrow, move Mario 50 px up
function upArrowPressed(){
    var element = document.getElementById("marioChar");
    topPos = topPos - 50;
    element.style.top = `${topPos}px`;
    console.log(element.style.top);
}
    
// when pressing down arrow, move Mario 50 px down
function downArrowPressed(){
    var element = document.getElementById("marioChar");
    topPos = topPos + 50;
    console.log(topPos);
    element.style.top = `${topPos}px`;
}
// Create a function that calls up and down arrow functions when keycode equals to 38 (up key), 40 (down key) 
function moveDirection(event) {
    if(event.keyCode == 38 || event.keyCode == 40){
        event.preventDefault();
    }
    switch (event.keyCode) {
        case 38:
            if(topPos <= 0){break;}  
            upArrowPressed();
        break;
        case 40:
            if(topPos >= 200){break;} 
            downArrowPressed();
        break;
        }
};
// when press a key moveDirection function executes
document.addEventListener('keydown', function(event) {
    moveDirection(event);
    console.log('iwork');
}
);
