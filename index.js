const largeCard = document.querySelector(".large-card");
const swapButtons = document.querySelectorAll(".card--button");

function swapContent() {
    const smallCard = this.closest(".small-card");
  
    const tempContent = largeCard.innerHTML;
    largeCard.innerHTML = smallCard.innerHTML;
    smallCard.innerHTML = tempContent;
  
    attachSwapButtons();
  }
  
  function attachSwapButtons() {
    const swapButtons = document.querySelectorAll(".card--button");
    swapButtons.forEach(button => {
      button.addEventListener("click", swapContent);
    });
  }
  
  // Initially attach event listeners
attachSwapButtons();