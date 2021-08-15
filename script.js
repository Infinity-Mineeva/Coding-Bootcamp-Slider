// DOM REFERENCES

const img = document.getElementById("profile-pic");
const quote = document.getElementById("quote-text");
const name = document.getElementById("name");
const title = document.getElementById("title");

// references to buttons
const backBtn = document.querySelector(".back");
const nextBtn = document.querySelector(".next");

// import reviews from quotes file
import { reviews } from "./quotes.js";

// set starting Item
let currentItem = 0;

// load first quote in reviews file upon successful page render
window.addEventListener("DOMContentLoaded", () => {
  showReview(currentItem);
});

// function to change values in DOM
const showReview = (person) => {
  const item = reviews[person];
  img.src = item.image;
  img.alt = item.name;
  name.textContent = item.name;
  title.textContent = item.title;
  quote.textContent = item.quote;
};

// functionality for next button

nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showReview(currentItem);
});

// functionality for previous button
backBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }

  showReview(currentItem);
});
