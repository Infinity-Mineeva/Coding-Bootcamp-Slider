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

// function to show next review
const showNext = () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showReview(currentItem);
};

// function to show previous review
const showPrevious = () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showReview(currentItem);
};

// show review if you click on arrow buttons on keyboard
const keyboardNav = (e) => {
  switch (e.key) {
    case "ArrowLeft":
    case "ArrowDown":
      showPrevious();
      break;
    case "ArrowRight":
    case "ArrowUp":
      showNext();
      break;
    default:
      return;
  }
};

// functionality for next button
nextBtn.addEventListener("click", showNext);

// functionality for previous button
backBtn.addEventListener("click", showPrevious);

// listen if arrow buttons on keyboard are clicked
document.addEventListener("keyup", keyboardNav);

// functionality for using mouse wheel to go through reviews
document.addEventListener("wheel", showNext);
