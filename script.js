function changeText() {
  document.getElementById("dynamic-text").textContent = "The text has been changed!";
}

function changeStyle() {
  const elem = document.getElementById("style-me");
  elem.style.color = "white";
  elem.style.backgroundColor = "teal";
  elem.style.padding = "10px";
  elem.style.borderRadius = "5px";
}

function addElement() {
  const newElement = document.createElement("p");
  newElement.textContent = "I'm a new paragraph added dynamically!";
  newElement.id = "added-element";
  document.getElementById("container").appendChild(newElement);
}

function removeElement() {
  const elem = document.getElementById("added-element");
  if (elem) {
    elem.remove();
  }
}
