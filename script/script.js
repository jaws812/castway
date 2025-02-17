let scrollButton = document.querySelector(".scroll");
console.log(scrollButton);

window.onscroll = function () {
  if (window.scrollY > 900) {
    console.log(window.scrollY);
    scrollButton.classList.remove("visually-hidden");
  } else {
    scrollButton.classList.add("visually-hidden");
  }
};

scrollButton.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
