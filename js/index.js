function onMouseOverCharacter() {
  let character = document.getElementById("character");
  character.style.transform = "scale(1.2)";
  character.style.transition = "transform 0.3s ease";
}

function onMouseOutCharacter() {
  let character = document.getElementById("character");
  character.style.transform = "scale(1)";
  character.style.transition = "transform 0.3s ease";
}
