console.log("Calculator connected")
const display = document.querySelector("#display");

const backspaceButton = document.querySelector(".backspace");



const buttons = document.querySelectorAll("button");
function deleteLastCharacter() {
    display.value = display.value.slice(0, -1);
    if (display.value === "") {
        display.value = "0";
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonValue = button.textContent;

        if (buttonValue === "AC") {
            display.value = "0";
        }else if (buttonValue === "⌫"){
            deleteLastCharacter();
        }else if (buttonValue === "="){
            display.value = eval(display.value);
        }else if (buttonValue === ","){
            display.value += ".";
        }else {
            if (display.value === "0"){
                display.value = buttonValue; 
            }else {
                display.value += buttonValue;
        }
    }
    });
});
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
