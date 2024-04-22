<link rel="stylesheet" href="Hangman design.css">

const wordDisplay = document.querySelector(".word-display");
const keysDiv = document.querySelector(".keys");

const getRandomWord = () => {
	const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
	console.log(word);
	document.querySelector(".Letters p").innerText = hint;
	wordDisplay.innerHTML = word.split("").map(() => '<li class="letter"</li>').join("");

}
const initGame(button, clickedLetter) => {
	console.log(button, clickedLetter);
}


//creating keyboard buttons
for (let i = 97; i <= 122; i++) {
	const button = document.createElement("button");
	button.innertext = String.fromCharCode(i);
	keysDiv.appendChild(button);
	button.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)))
}

const wordList = [
{ word: "Hardware", hint: "The physical parts of a computer, like the keyboard and mouse." },
    { word: "Software", hint: "The programs and operating systems that run on a computer." },
    { word: "Algorithm", hint: "A set of instructions designed to perform a specific task." },
    { word: "Database", hint: "A collection of information organized in a way that a computer program can quickly select desired pieces of data." },
    { word: "Browser", hint: "A program that allows you to access and view websites on the internet." },
    { word: "Pixel", hint: "The smallest unit of a digital image, often seen on screens." },
    { word: "Network", hint: "A group of computers that are connected to each other to share resources and information." },
    { word: "Encryption", hint: "The process of converting information or data into a secure code to prevent unauthorized access." },
    { word: "Firewall", hint: "A security system that controls the incoming and outgoing network traffic based on predetermined security rules." },
    { word: "Cache", hint: "A place where data is stored temporarily to help websites, browsers, and apps load faster." }
];

getRandomWord();
