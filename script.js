const root = document.getElementById("root");
const input = createElement(
  "input",
  {
    placeholder: "Type text",
    class: "myInput",
  },
  root,
  ""
);

const button = createElement(
  "button",
  {
    class: "myButton",
  },
  root,
  "Add"
);
button.addEventListener("click", makeEvent)
input.addEventListener("keydown",(event)=>{
    if(event.key === "Enter"){
        makeEvent()
    }
})

function makeEvent() {
  if (!input.value) {
    alert("Write a target");
    return;
  }
  let targets = createElement(
    "div",
    {
      class: "target_div",
    },
    root
  );
  let innerText = createElement("p", "", targets, input.value);
  let clearButton = createElement(
    "button",
    {
      class: "clearButton",
    },
    targets,
    "Clear"
  );
  input.value = "";
  clearButton.addEventListener("click", () => {
    targets.remove();
  });
}

function createElement(tag, attributes, parent, text) {
  const element = document.createElement(tag);
  if (attributes) {
    for (let atr in attributes) {
      element.setAttribute(atr, attributes[atr]);
    }
  }
  if (text) {
    element.innerHTML = text;
  }
  parent.appendChild(element);
  return element;
}
