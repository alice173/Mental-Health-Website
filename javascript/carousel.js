const nextButton = document.querySelector(".next-button");
const backButton = document.querySelector(".back-button");
const quoteText = document.querySelector(".quote--text");
const quoteName = document.querySelector(".quote--title");
let displayedQuotes = [];
let currentIndex = -1;

const motivationalQuotes = [
  {
    text: "You are not your illness. You have an individual story to tell. You have a name, a history, a personality. Staying yourself is part of the battle.",
    author: "Julian Seifter",
  },
  {
    text: "Mental health… is not a destination, but a process. It's about how you drive, not where you’re going.",
    author: "Noam Shpancer",
  },
  {
    text: "You don’t have to control your thoughts. You just have to stop letting them control you.",
    author: "Dan Millman",
  },
  {
    text: "What mental health needs is more sunlight, more candor, and more unashamed conversation.",
    author: "Glenn Close",
  },
  {
    text: "Not until we are lost do we begin to understand ourselves.",
    author: "Henry David Thoreau",
  },
  {
    text: "You, yourself, as much as anybody in the entire universe, deserve your love and affection.",
    author: "Buddha",
  },
  {
    text: "You are the one thing in this world, above all other things, that you must never give up on.",
    author: "L.R. Knost",
  },
  {
    text: "Start where you are. Use what you have. Do what you can.",
    author: "Arthur Ashe",
  },
  {
    text: "Healing takes time, and asking for help is a courageous step.",
    author: "Mariska Hargitay",
  },
  {
    text: "Sometimes the people around you won’t understand your journey. They don’t need to, it’s not for them.",
    author: "Joubert Botha",
  },
  {
    text: "There is hope, even when your brain tells you there isn’t.",
    author: "John Green",
  },
  {
    text: "This too shall pass.",
    author: "Persian Proverb",
  },
  {
    text: "Your present circumstances don’t determine where you can go; they merely determine where you start.",
    author: "Nido Qubein",
  },
  {
    text: "Feelings are just visitors. Let them come and go.",
    author: "Mooji",
  },
  {
    text: "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
    author: "Albus Dumbledore (J.K. Rowling)",
  },
  {
    text: "Out of suffering have emerged the strongest souls; the most massive characters are seared with scars.",
    author: "Khalil Gibran",
  },
  {
    text: "You are stronger than you know. More capable than you ever dreamed. And you are loved more than you could possibly imagine.",
    author: "Unknown",
  },
  {
    text: "Courage doesn’t always roar. Sometimes courage is the little voice at the end of the day that says, ‘I’ll try again tomorrow.’",
    author: "Mary Anne Radmacher",
  },
  {
    text: "Just because no one else can heal or do your inner work for you doesn’t mean you can, should, or need to do it alone.",
    author: "Lisa Olivera",
  },
  {
    text: "You’re not a burden. You have a light that is meant to shine.",
    author: "Unknown",
  },
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
  return motivationalQuotes[randomIndex];
}

function changeQuote(quote) {
  quoteText.classList.remove("active");

  setTimeout(() => {
    quoteName.textContent = quote.author;
    quoteText.textContent = quote.text;
    quoteText.classList.add("active");
  }, 500); // Match this duration with the CSS transition duration
}

function showNextQuote() {
  // If we are at the last displayed quote, generate a new one
  if (currentIndex === displayedQuotes.length - 1) {
    const newQuote = getRandomQuote();
    displayedQuotes.push(newQuote);

    quoteText.classList.remove("active");
    quoteText.classList.add("active");
    currentIndex++;
  } else {
    // Otherwise, just move to the next quote in history
    currentIndex++;
  }
  changeQuote(displayedQuotes[currentIndex]);
}

function showPreviousQuote() {
  // Check if there is a previous quote to show
  if (currentIndex > 0) {
    currentIndex--;
    changeQuote(displayedQuotes[currentIndex]);
  } else {
    console.log("No more previous quotes!");
  }
}

// Event listeners for the buttons
nextButton.addEventListener("click", showNextQuote);
backButton.addEventListener("click", showPreviousQuote);

// Display the first random quote initially
showNextQuote();
