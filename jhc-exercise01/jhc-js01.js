const conty = document.querySelector(".container");

const clicker = () => {
  const pippie = document.createElement("p");
  pippie.textContent = "Button has been clicked";
  conty.appendChild(pippie);
};

document.querySelector("button").onclick = clicker;
