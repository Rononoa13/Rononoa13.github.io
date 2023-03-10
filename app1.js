let animationText = [
    "I love Python 👨‍💻",
    "I play BasketBall 🏀 ⛹️‍♂️",
    "I like photography 📷",
    "I love to Code 🤖",
    "I read books 📚",
    "I am from Nepal 🇳🇵",
    "I am a Data Engineer 📊",
    "I love Flask 👨‍💻",
    "I love to swim 🏊‍♂️",
    "I love to travel 🧳 🗺️",
    "I love chess ♟️",
    "I love music 🎧", 
    "I play X-Box 🎮",
    "I love to cook 🍳",
    "I love linux 💻"
];
// let animationText = [
//     "I love Python",
//     "I play BasketBall",
//     "I like photography",
//     "I love to Code",
//     "I read books",
//     "I am from Nepal"
// ];

function selectFromList() {
    return animationText[Math.floor(Math.random() * animationText.length)];
}

function main() {
    setInterval(() => animateText(), 3000);
}

// item = selectFromList()
document.getElementById("text-id").innerHTML = "Hello, World 🌎" ;

function animateText() {

    item = selectFromList()
    // 
    for (let i = 0; i < animationText.length; i++) {
        document.getElementById("text-id").innerHTML = item;
    }

    // holds complete element!
    const text = document.querySelector("#text-id");
    console.log(text)
    // changes complete element to only text content!
    const strText = text.textContent;
    console.log(strText)
    const splitText = strText.split("");
    console.log(splitText)

    text.textContent = "";
    for (let i = 0; i < splitText.length; i++) {
        text.innerHTML += "<span>" + splitText[i] + "</span>";
        // console.log(text);
    }
    console.log(text.innerHTML);

    let char = 0

    let timer = setInterval(onTick, 80);

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
// 

// animateText()
main()
