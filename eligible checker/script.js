const button = document.querySelector("button");

button.addEventListener("click", checkEligibility);

function checkEligibility() {
  let selected = document.querySelector('input[name="edu"]:checked');
  let resultBox = document.getElementById("result");

  if (!selected) {
    resultBox.innerHTML = "Please select your qualification!";
    return;
  }

  let qualification = selected.value;
  let message;

  switch (qualification) {
    case "Highschool":
    case "UG":
      message = "Eligible for Job";
      break;

    case "Illiterate":
    case "PG":
    case "Doctorate":
      message = "Not Eligible for Job";
      break;

    default:
      message = "Invalid selection";
  }

  resultBox.innerHTML = message;
}
