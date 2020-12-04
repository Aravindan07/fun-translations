var inputValue = document.getElementById("txt-input");
var output = document.getElementById("output");

function getServerUrl(type, text) {
  if (type === "Groot") {
    return `https://api.funtranslations.com/translate/groot.json?text=${text}`;
  }
  if (type === "Pirate") {
    return `https://api.funtranslations.com/translate/pirate.json?text=${text}`;
  }
  if (type === "Morse-Code") {
    return `https://api.funtranslations.com/translate/morse.json?text=${text}`;
  }
  if (type === "Dog") {
    return `https://api.funtranslations.com/translate/doge.json?text=${text}`;
  }
  if (type === "Shakespeare") {
    return `https://api.funtranslations.com/translate/shakespeare.json?text=${text}`;
  }
  alert("Please select a translation");
}

function clickHandler() {
  let selectedApi = document.getElementById("translation").value;
  fetch(getServerUrl(selectedApi, inputValue.value))
    .then((response) => response.json())
    .then((data) => {
      console.log(data.contents);
      return (output.innerText = data.contents.translated);
    })
    .catch((error) => alert("Please select a Translation"));
}

let buttonTranslate = document.getElementById("btn-translate");
buttonTranslate.addEventListener("click", clickHandler);
