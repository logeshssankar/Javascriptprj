const button = document.querySelector("button");
let resultdiv = document.createElement("div");
resultdiv.id = "result";
document.querySelector(".container").appendChild(resultdiv);

button.addEventListener("click", displayStats);
function displayStats() {
  const input = document.getElementById("input");
  const city = input.options[input.selectedIndex].value;
  let population = 0,
    literacyRate = 0,
    language = "";

  switch (city) {
    case "bengaluru":
      population = 8443675;
      literacyRate = 88.71;
      language = "Kannada";
      break;

    case "chennai":
      population = 4646731;
      literacyRate = 90.2;
      language = "Tamil";
      break;

    case "mumbai":
      population = 12442373;
      literacyRate = 89.73;
      language = "Marathi";
      break;

    case "delhi":
      population = 65311212;
      literacyRate = 86.72;
      language = "Hindi";
      break;
  }

  let text = `The Indian city of ${city} has a population of ${population}. Language spoken is ${language} and literacy rate is ${literacyRate}%`;
  console.log(text);
  document.getElementById("result").innerHTML = text;
}
