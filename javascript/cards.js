const largeCard = document.querySelector(".large-card");
const swapButtons = document.querySelectorAll(".card--button");
const signSection = document.querySelector(".signs");

function swapContent() {
  const smallCard = this.closest(".small-card");
  const screenWidth = window.innerWidth;

  if (screenWidth > 650) {
    document.startViewTransition(() => {
      const tempContent = largeCard.innerHTML;
      largeCard.innerHTML = smallCard.innerHTML;
      smallCard.innerHTML = tempContent;
      signSection.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    });
  } else {
    const cardList = smallCard.querySelector(".card--list");
    cardList.style.display = "block";
  }
  resetCards(); // Reset cards' state
}

function resetCards() {
  swapButtons.forEach((button) => {
    button.removeEventListener("click", swapContent);
    button.addEventListener("click", swapContent);
  });
}

// Initially attach event listeners
swapButtons.forEach((button) => {
  button.addEventListener("click", swapContent);
});
