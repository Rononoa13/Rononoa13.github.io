let animationText = [
  'I am a programmer',
  'I Experiment',
  'I photo!',
  'I Ball',
  'I read',
  'I write',
  'I Sleep'
];

let timer = setInterval(onTick, 50);

function onTick() {
  var span = text.querySelectorAll('span')[char];
  //span.classList.add('fade');
  span.className += 'fade';
  char++;
  if (char == splitText.length) {
    myStopFunction();
  }
}

function myStopFunction() {
  clearInterval(timer);
  timer = '';
}

function generateRandomText() {
  let item = animationText[Math.floor(Math.random() * animationText.length)];

  for (let i = 0; i < animationText.length; i++) {
    document.getElementById('text-id').innerHTML = item;
  }

  const text = document.querySelector('#text-id');
  const strText = text.textContent;
  const splitText = strText.split('');

  text.textContent = '';
  for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += '<span>' + splitText[i] + '</span>';
  }
}

function main() {
  setInterval(() => generateRandomText(), 1000);
}

main();
