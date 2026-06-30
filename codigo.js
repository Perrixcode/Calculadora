
function handleKeyboardInput(event) {
    console.log(event.key);
    if (event.key >= "0" && event.key <= "9"){
        if (display.value === "0") {
        display.value = event.key;
    } else {
        display.value += event.key;
        }
    } 

        if (
    event.key === "+" ||
    event.key === "-" ||
    event.key === "*" ||
    event.key === "/"
    ) {
        display.value += event.key;
    }

    if (event.key === "Enter") {
        display.value = eval(display.value);
    }

    if (event.key === "Backspace") {
        deleteLastCharacter();
    }

    if (event.key === "Escape") {
        display.value = "0";
    }
}

document.addEventListener("keydown", handleKeyboardInput);

console.log("Calculator connected")

const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

function clearDisplay() {
    display.value = "0";
}
function deleteLastCharacter() {
    display.value = display.value.slice(0, -1);
    if (display.value === ""){
        display.value = "0";
    }
}
function calculate() {
    display.value = eval(display.value);
}
function appendToDisplay(value) {
    if (display.value === "0"){
        display.value = value;
    } else {
        display.value += value;
    
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonValue = button.textContent;
        if (buttonValue === "AC"){
            clearDisplay();
        } else if (buttonValue === "⌫") {
            deleteLastCharacter();
        } else if (buttonValue === "="){
            calculate();
        } else if (buttonValue === ","){
            appendToDisplay(".");

        } else {
            appendToDisplay(buttonValue);
        }
    });
});