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

  function showList(){
    document.querySelector(".card--list").style.display = "block"
  }
  function applySmallScreenBehavior() {
    if (window.innerWidth <= 600) {
      swapButtons.forEach(button => {
        button.addEventListener("click", swapContent);
      });
      // Add small screen specific behavior
      // Example: alert user
      alert('Small screen behavior activated!');
    } else {
      // Reapply default behavior if needed
      swapButtons.forEach(button => {
        button.addEventListener("click", showList);
      });
    }
  }
  
  window.addEventListener('resize', applySmallScreenBehavior);
  applySmallScreenBehavior();  // Check initial screen size
  attachSwapButtons();
  
