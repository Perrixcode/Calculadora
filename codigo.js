console.log("Calculator connected")
const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonValue = button.textContent;

        if (buttonValue === "AC") {
            display.value = "";
        }else if (buttonValue === "="){
            display.value = eval(display.value);
        }else if (buttonValue === ","){
            display.value += ".";
        }else {
            display.value += buttonValue;
        }
    });
});

