let animationText = [
    'I am a programmer', 
    'I Experiment', 
    'I photo!',
    'I Ball',
    'I read', 
    'I write',
    'I Sleep'
];

let item = animationText[Math.floor(Math.random() * animationText.length)]

console.log(animationText);

for(let i=0; i < animationText.length; i++)
{
    document.getElementById('text-id').innerHTML = item;   
    
}


// holds complete element!
const text = document.querySelector('#text-id');
// changes complete element to only text content!
const strText = text.textContent;
const splitText = strText.split('');

text.textContent = '';
for(let i = 0; i < splitText.length; i++)
{
    text.innerHTML += '<span>' + splitText[i] + '</span>';
}

let char = 0;

let timer = setInterval(onTick, 50);

function onTick()
{
    var span = text.querySelectorAll('span')[char];
    //span.classList.add('fade');
    span.className += 'fade';
    char++;
    if(char == splitText.length){
        myStopFunction();

    }
    
}

function myStopFunction() {
    clearInterval(timer);
    timer = '';
}
    