const modalBtn = document.getElementById("hamburger");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

const bg1 = document.querySelector(".bg-yellow");
const bg2 = document.querySelector(".bg-red");

let modalActive = false;

modalBtn.addEventListener("click", () => {
  modalActive = !modalActive;
  console.log("Modal Avtive: " + modalActive);
  // make modal appear ...
});

btn1.addEventListener("mouseover", () => {
  bg1.classList.add("bg-yellow-active");
});

btn1.addEventListener("mouseout", () => {
  bg1.classList.remove("bg-yellow-active");
});

btn2.addEventListener("mouseover", () => {
  bg2.classList.add("bg-red-active");
});

btn2.addEventListener("mouseout", () => {
  bg2.classList.remove("bg-red-active");
});
