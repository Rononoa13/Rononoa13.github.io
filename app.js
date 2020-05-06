let animationText = [
  "I am a programmer",
  "I Experiment",
  "I Photo!",
  "I Hoop",
  "I Read",
  "I Write",
  "I Sleep",
];

function main() {
  setInterval(() => animateText(), 5000);
}

function animateText() {
  let item = animationText[Math.floor(Math.random() * animationText.length)];

  //console.log(animationText);

  for (let i = 0; i < animationText.length; i++) {
    document.getElementById("text-id").innerHTML = item;
  }

  // holds complete element!
  const text = document.querySelector("#text-id");
  // changes complete element to only text content!
  const strText = text.textContent;
  const splitText = strText.split("");

  text.textContent = "";
  for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
    // console.log(text);
  }
  console.log(text.innerHTML);

  let char = 0;

  let timer = setInterval(onTick, 50);

  function onTick() {
    let span = text.getElementsByTagName("span")[char];
    span.classList.add("fade");
    // span.className += "fade";
    // when function returns "undefined, do nothing."
    if (span.classList.add("fade") == undefined) {
      //pass
    }
    ++char;
    if (char == splitText.length) {
      myStopFunction();
    }
  }

  function myStopFunction() {
    clearInterval(timer);
    timer = " ";
  }
}

main();