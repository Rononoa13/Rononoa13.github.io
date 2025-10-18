let animationText = [
    "I code in Python like a wizard 👨‍💻✨",
    "I dribble a basketball like a champ 🏀⛹️‍♂️",
    "I capture moments one click at a time 📷",
    "I drum my heart out and make beats 🎶🥁",
    "I tinker with code and bring machine to life 🤖",
    "I get lost in books and find new worlds 📚",
    "Nepal is home, and proud I am 🇳🇵",
    "I build software and break things elegantly 🧑🏽‍💻",
    "Flask and FastAPI is my secret weapon for web magic 👨‍💻",
    "I dive into the water and conquer waves 🏊‍♂️",
    "I wander the world with my backpack 🧳🗺️",
    "Chess is my battlefield, and pawns fear me ♟️",
    "I vibe with music and let it move me 🎧",
    "I conquer virtual worlds on X-Box 🎮 and playstation ",
    "I cook like a mad scientist in the kitchen 🍳",
    "I hack around on Linux and feel unstoppable 💻"
];

function selectFromList() {
  return animationText[Math.floor(Math.random() * animationText.length)];
}

let firstTime = true;
function animateText() {
  const textElement = document.getElementById("text-id");
  let item;

  if (firstTime) {
    item = "Hello, World 🌎";
    firstTime = false;
  } else {
    // pick random from animationText excluding Hello World
    item = animationText[Math.floor(Math.random() * (animationText.length - 1)) + 1];
  }

//   const item = selectFromList();

  textElement.textContent = ""; // clear previous text
  const splitText = Array.from(item); // handles emojis correctly

  splitText.forEach(char => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char; // preserve spaces
    span.style.opacity = "0";
    span.style.transition = "opacity 0.3s ease, color 0.3s ease";
    textElement.appendChild(span);
  });

  let char = 0;
  const spans = textElement.getElementsByTagName("span");
  const interval = 90; // time per letter in ms

  const timer = setInterval(() => {
    if (char < spans.length) {
      spans[char].style.opacity = "1";
      char++;
    } else {
      clearInterval(timer);
      // After the last letter fades in, wait 2s then start next animation
      setTimeout(animateText, 1000);
    }
  }, interval);
}

// start animation
animateText();
