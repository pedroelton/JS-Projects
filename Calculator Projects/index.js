let runningTotal = 0;
let buffer = "0"; // keep track what the user type in
let previousOperator; //what user pressed previouslly
const screen = document.querySelector(".visor");

document
    .querySelector(".numbers")
    .addEventListener("click", function(event) {
        buttonClick(event.target.innerText);
    });

function buttonClick(value) {
        console.log(value);
    if (isNaN(parseInt(value))) {
      handleSymble(value);
    } else {
      handleNumber(value);
    }
}

function handleNumber(value) {
    if (buffer === "0") {
        buffer = value;
    } else {
        buffer += value;
    }
}

function handleSymble(value) {

}

function rerender() {
    screen.innerText = buffer;
}


/*


HE USES DIFFERENT CLASSES AND ID
    SCREEN = VISOR
    CALC-BUTTONS = NUMBERS


 */