const conty = document.querySelector(".container");
const butty = document.querySelector("button");
let count = 0;

const clicker = () => {
  count++;
  if (count === 1) {
    butty.style.backgroundColor = "#000";
    butty.style.color = "#FFF";
  } else {
    count = 0;
    butty.style.backgroundColor = "yellow";
    butty.style.color = "#000";
  }
  const pippie = document.createElement("p");
  pippie.textContent = "Button has been clicked";
  conty.appendChild(pippie);
};

butty.onclick = clicker;
