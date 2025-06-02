//major arcana deck array
const tarotDeck = [
  {
    cardName: "The Fool",
    cardMeaning: "A new journey begins. Embrace the unknown with openness and curiosity."
  },
  {
    cardName: "The Magician",
    cardMeaning: "You have the tools and potential. Focus your will and act with intention."
  },
  {
    cardName: "The High Priestess",
    cardMeaning: "Look inward. Trust your intuition and allow the mystery to unfold."
  },
  {
    cardName: "The Empress",
    cardMeaning: "Nurture what wants to grow. Creativity, abundance, and care are highlighted."
  },
  {
    cardName: "The Emperor",
    cardMeaning: "Stability and structure are needed. Take leadership with integrity."
  },
  {
    cardName: "The Hierophant",
    cardMeaning: "Tradition, belief systems, or guidance may play a role. Consider what you follow."
  },
  {
    cardName: "The Lovers",
    cardMeaning: "A meaningful connection or choice. Align with what resonates deeply."
  },
  {
    cardName: "The Chariot",
    cardMeaning: "Move forward with determination. Balance your will and emotions."
  },
  {
    cardName: "Strength",
    cardMeaning: "Gentle courage over brute force. Inner resilience guides you."
  },
  {
    cardName: "The Hermit",
    cardMeaning: "Step back and reflect. Wisdom is found in stillness and solitude."
  },
  {
    cardName: "Wheel of Fortune",
    cardMeaning: "Change is in motion. Stay centered and observe the cycles."
  },
  {
    cardName: "Justice",
    cardMeaning: "Accountability and fairness matter. Weigh your actions and their impact."
  },
  {
    cardName: "The Hanged Man",
    cardMeaning: "Surrender control. A new perspective is forming in the pause."
  },
  {
    cardName: "Death",
    cardMeaning: "An ending clears space. Let go to allow transformation."
  },
  {
    cardName: "Temperance",
    cardMeaning: "Balance and moderation are key. Blend opposites into harmony."
  },
  {
    cardName: "The Devil",
    cardMeaning: "What binds you? Acknowledge habits or desires that no longer serve."
  },
  {
    cardName: "The Tower",
    cardMeaning: "Sudden change or upheaval clears what was unstable. Rebuild with clarity."
  },
  {
    cardName: "The Star",
    cardMeaning: "Hope and renewal follow challenge. Trust in healing and divine timing."
  },
  {
    cardName: "The Moon",
    cardMeaning: "Not all is clear. Trust your instincts through the fog of uncertainty."
  },
  {
    cardName: "The Sun",
    cardMeaning: "Joy, clarity, and warmth illuminate your path. Share your light."
  },
  {
    cardName: "Judgement",
    cardMeaning: "A call to awaken or release the past. Reflect on your journey."
  },
  {
    cardName: "The World",
    cardMeaning: "Completion and wholeness. Celebrate how far you've come."
  }
];

const cards = document.querySelectorAll(".card");

//selects all cards, loops through and sets up click function
cards.forEach((card) => {
  card.addEventListener("click", () => {
    // Flip logic or assign card meaning here
    card.classList.toggle("flipped");
  });
});

const cardFronts = document.querySelectorAll(".card-front");
const cardBacks = document.querySelectorAll(".card-back");
const messageBox = document.getElementById("card-message");

const shuffledDeck = tarotDeck.sort(() => 0.5 - Math.random()); // Shuffle the deck
const selectedCards = shuffledDeck.slice(0, 3); 

// Store the currently shown definitions by card
selectedCards.forEach((cardData, index) => {
  if (cardFronts[index] && cardBacks[index]) {
    cardFronts[index].textContent = "?"; 
    cardBacks[index].textContent = "";
  }
   // Add event listener for flip + meaning reveal
  cards[index].addEventListener("click", () => {
    cards[index].classList.toggle("flipped");

    // Update the front with the card name
    cardFronts[index].textContent = cardData.cardName;

    // Show the meaning in the message box
    messageBox.textContent = cardData.cardMeaning;
  });
});

console.log("Assigned cards:",selectedCards); // for later (assigning cards visually)