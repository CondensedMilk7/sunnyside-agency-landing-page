// Note:
// maybe add intersection observer so that the header changes from transparent
// to solid color when it leaves the first image.

const hamburger = document.getElementById("hamburger");
const modal = document.querySelector(".modal");
const backdrop = document.querySelector(".backdrop");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

const bg1 = document.querySelector(".bg-yellow");
const bg2 = document.querySelector(".bg-red");

let modalActive = false;

hamburger.addEventListener("click", () => {
  modalActive = !modalActive;
  console.log("Modal Avtive: " + modalActive);

  hamburger.classList.toggle("hamburger-active");
  modal.classList.toggle("hidden");
  backdrop.classList.toggle("hidden");
});

backdrop.addEventListener("click", () => {
  modal.classList.add("hidden");
  backdrop.classList.add("hidden");
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
