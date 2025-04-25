function generateCard() {
  const suits = ["♦", "♥", "♠", "♣"];
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];

  const suitClass = {
    "♦": "diamond",
    "♥": "heart",
    "♠": "spade",
    "♣": "club"
  };

  const card = document.getElementById("card");
  card.className = "card " + suitClass[randomSuit];
  card.querySelector(".top-suit").textContent = randomSuit;
  card.querySelector(".bottom-suit").textContent = randomSuit;
  card.querySelector(".number").textContent = randomValue;
}

// Ejecuta al cargar la página
window.onload = generateCard;

// Bonus: actualiza cada 10 segundos
setInterval(generateCard, 10000);