let animationText = [
    "I love Python 👨‍💻",
    "I play BasketBall 🏀 ⛹️‍♂️",
    "I like photography 📷",
    "I drum my heart out 🎶 🥁",
    "I love to Code 🤖",
    "I read books 📚",
    "I am from Nepal 🇳🇵",
    "I am a Software Engineer 🧑🏽‍💻",
    "I love Flask 👨‍💻",
    "I love to swim 🏊‍♂️",
    "I love to travel 🧳 🗺️",
    "I love chess ♟️",
    "I love music 🎧", 
    "I play X-Box 🎮",
    "I love to cook 🍳",
    "I love linux 💻"
];

function selectFromList() {
  return animationText[Math.floor(Math.random() * animationText.length)];
}

function animateText() {
  const textElement = document.getElementById("text-id");
  const item = selectFromList();

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
  const interval = 150; // time per letter in ms

  const timer = setInterval(() => {
    if (char < spans.length) {
      spans[char].style.opacity = "1";
      char++;
    } else {
      clearInterval(timer);
      // After the last letter fades in, wait 2s then start next animation
      setTimeout(animateText, 2000);
    }
  }, interval);
}

// start animation
animateText();
