const button = document.querySelector("button");
let resultdiv = document.createElement("div");
resultdiv.id = "result";
document.querySelector(".container").appendChild(resultdiv);

button.addEventListener("click", calculate);

function calculate() {
  let expression = document.getElementById("input").value.trim();
  let resultBox = document.getElementById("result");

  let parts = expression.split(" ");

  if (parts.length !== 3) {
    resultBox.innerHTML = "Invalid format! Use: number operator number";
    return;
  }

  let num1 = Number(parts[0]);
  let operator = parts[1];
  let num2 = Number(parts[2]);
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;

    case "-":
      result = num1 - num2;
      break;

    case "*":
      result = num1 * num2;
      break;

    case "/":
      if (num2 === 0) {
        result = "Cannot divide by zero";
      } else {
        result = num1 / num2;
      }
      break;

    default:
      result = "Invalid operator";
  }

  document.getElementById("result").innerHTML = result;
}
