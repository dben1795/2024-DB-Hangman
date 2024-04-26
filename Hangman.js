<link rel="stylesheet" href="Hangman design.css">
//query selectors for different classes
const wordDisplay = document.querySelector(".word-display");
const hangmanImage = document.querySelector(".hangman-stand img");
const letters = document.querySelector(.letters p);
const keysDiv = document.querySelector(".keys");
const gameModel = document.querySelector(".gameModel");

let currentWord, correctLetters = [], wrongGuessCount = 0;
const maxGuesses = 8;

const getRandomWord = () => {
	
	const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
	//random word and hint for wordlist
	currentWord = word;
	console.log(word,hint);
	document.querySelector(".Letters p").innerText = hint;
	wordDisplay.innerHTML = word.split("").map(() => '<li class="letter"</li>').join("");

}


//setting timeout function 
const gameOver = (isVictory) => {
	setTimeout(() => {
		const modelText = isVictory ? `you got it:` : `the correct word was:`;
		gameModel.querySelector("img").src = `images/${isVictory ? 'victory' : 'lost'}`;
		gameModel.querySelector("h3").innerText = `${isVictory ? 'Great Job' : 'Game Over!'}`;
		gameModel.querySelector("p").innerHTML = `images/${isVictory ? 'victory' : 'lost'}`;
		gameModel.classList.add("show");
	}, 300);
}
const initGame = (button, clickedLetter) => {
	//checking if clickedLetter is existing on currentword
	if(currentWord.includes(clickedLetter)) {
		//showing the correct letters to the user
		[...currentWord].forEach((letter, index) =>  {
			if(letter === clickedLetter) {
				correctLetters.push(letter) {
				wordDisplay.querySelectorAll("li")[index].innerText = letter;
				wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
				}
	} else {
		//if clicked letter doesnt exist then update the wrongguesscount and hangman image
		wrongGuessCount++;
		hangmanImage.src = 'images/hangman-${wrongGuessCount}.svg';
	}
	
	button.disabled = true;
	letters.innerText = '${wrongGuessCount} / ${maxGuesses}';
	//calling the gameover function for the appropriate result fits the condition
	if(wrongGuessCount === maxGuesses) return gameOver(false);
	if(correctLetters.length === currentWord.length) return gameOver(true);
}


//creating keyboard buttons
for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.textContent = String.fromCharCode(i); // Set text from ASCII code
    keysDiv.appendChild(button); // Append button to the keys div

    // Event listener using a closure to correctly bind the button and its text content
    button.addEventListener("click", (function(btn) {
        return function() {
            initGame(btn, btn.textContent);
        };
    })(button));
}


//creating the list and hints that the game will use
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
