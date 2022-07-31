"use strict";

const sumbit = document.querySelector(".btn-sub");
const origin = document.querySelector(".irc-sec");
const thankAlart = document.querySelector(".thankAlart");
const btnSelect = document.querySelectorAll(".irc-sec-btn");
const secRating = document.querySelector(".irc-select");
const rating = document.getElementById("number");

sumbit.addEventListener("click", () => {
  if (!thankAlart.classList.contains("active")) {
    origin.classList.remove("active");
    thankAlart.classList.add("active");
    rating.innerHTML;
  }
});

thankAlart.addEventListener("click", () => {
  if (thankAlart.classList.contains("active")) {
    origin.classList.add("active");
    thankAlart.classList.remove("active");
  }
});

btnSelect.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});
