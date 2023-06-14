const conty = document.querySelector(".container");
const butty1 = document.getElementById("button1");
const butty2 = document.getElementById("button2");
let count1 = 0;
let count2 = 0;

const clicker = () => {
  count1++;
  count2++;
  if (count2 > 6) {
    return;
  }
  if (count1 === 1) {
    butty1.style.backgroundColor = "#000";
    butty1.style.color = "#FFF";
  } else {
    count1 = 0;
    butty1.style.backgroundColor = "yellow";
    butty1.style.color = "#000";
  }
  const pippie = document.createElement("p");
  pippie.textContent = `Button has been clicked  -  `;
  pippie.setAttribute("class", "pippies");
  conty.appendChild(pippie);
  if (count2 === 6) {
    setTimeout(() => {
      document.querySelectorAll(".pippies").forEach((pip) => {
        pip.textContent = "Button Clicking has come to a Halt!";
      });
    }, 3000);
    displayButtons();
  }
};

butty1.onclick = clicker;

const conty2 = document.querySelector(".container2");
let count3 = 0;
let count4 = 1;
let count5 = 1;

const displayButtons = () => {
  setInterval(() => {
    if (count4 < 9) {
      count3++;
      const pipper = document.createElement("button");
      pipper.textContent = count5;
      pipper.setAttribute("class", "buttercup1");
      conty2.appendChild(pipper);
      count5++;
      if (count3 === 22) {
        const barry = document.createElement("br");
        conty2.appendChild(barry);
        count3 = 0;
        count4++;
        if (count4 > 8) {
          butty2.style.display = "inline-block";
        }
      }
    }
  }, 10);
};

const changeThem = () => {
  if (count6 === 1) {
    document.querySelectorAll(".buttercup1").forEach((butty) => {
      butty.classList.remove("buttercup1");
      butty.classList.add("buttercup2");
    });
    count6++;
  } else {
    document.querySelectorAll(".buttercup2").forEach((butty) => {
      butty.classList.add("buttercup1");
      butty.classList.remove("buttercup2");
    });
    count6 = 1;
  }
};

let count6 = 1;

butty2.onclick = changeThem;
