const conty = document.querySelector(".container");
const butty = document.querySelector("button");
let count1 = 0;
let count2 = 0;

const clicker = () => {
  count1++;
  count2++;
  if (count2 === 8) {
    return;
  }
  if (count1 === 1) {
    butty.style.backgroundColor = "#000";
    butty.style.color = "#FFF";
  } else {
    count1 = 0;
    butty.style.backgroundColor = "yellow";
    butty.style.color = "#000";
  }
  const pippie = document.createElement("p");
  pippie.textContent = "Button has been clicked";
  pippie.setAttribute("class", "pippies");
  conty.appendChild(pippie);
  if (count2 === 7) {
    setTimeout(() => {
      document.querySelectorAll(".pippies").forEach((pip) => {
        pip.textContent = "Button Clicking has come to a Halt!";
      });
    }, 3000);
  }
};

butty.onclick = clicker;
