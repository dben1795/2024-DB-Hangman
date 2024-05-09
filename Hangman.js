//initializes variables
let displayedWord = "";
const wordDisplay = document.querySelector(".word-display");
let Button = document.getElementById(".keys button");
let guessedLetters = [];
let wrongGuesses = 0;
const maxWrongGuesses = 8;








// This code listens for the 'DOMContentLoaded' event, which fires when the initial HTML document loads
    document.addEventListener('DOMContentLoaded', function() {
    //  this Selects the <div> element by class name "keys"
        const keysDiv = document.querySelector(".keys");
        //  This Loop through the range of ASCII codes from 97 which would be a, to 122 which would be z
        for (let i = 97; i <= 122; i++) {
        // this constant creates my button element
            const button = document.createElement("button");
            // this sets the text content of the button to the corresponding lowercase letter
            button.innerText = String.fromCharCode(i);
            // Append the button to the "keys" <div> element
            keysDiv.appendChild(button);
            button.addEventListener("click", e => initGame(e.target.innerText));
        }
         getRandomWord();
    });
   


//this function gets random a random word from my word list which is an array of 10 words and hints
function getRandomWord() {
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    // this outputs the word and hint
    console.log(word, hint);
    //gets hint by Id
    document.getElementById('hint').innerText = "hint: " + hint;
    //displayed Word is word chosen by word list
    displayedWord = word;
    //this line of code is creating a string of HTML that represents all the blank spaces for the letters in the word being guessed.
    wordDisplay.innerHTML = word.split("").map(() => '<li class = "letter">_</li>').join("");
}


//function that runs game based off clicked letter
function initGame (clickedLetter) {


 
    // Check if the user's guess is already in the guessedLetters array
    if (guessedLetters.length >= maxWrongGuesses || wordGuessed()) {
      return;
    }
// Check if the array `guessedLetters` contains the `clickedLetter`
    if (guessedLetters.includes(clickedLetter)) {
        return;
    }
 
    // Add the user's guess to the guessedLetters array
    guessedLetters.push(clickedLetter);
// if wrong letter is not included in word update wrong guesses and updates guess count
    if (!displayedWord.includes(clickedLetter)) {
        wrongGuesses++;
        updateGuessCount();
    }
 


    updateWordDisplay();


   
 
    // this function Updates the word display on screen


function updateWordDisplay() {
    // Sets the `innerHTML` property of the `wordDisplay` element to a string that contains the updated word display
   wordDisplay.innerHTML = displayedWord.split("").map(letter => {
    // If the `guessedLetters` array includes the current `letter`, this will return a string that contains the letter wrapped in an <li> element with the class name "letter"
    if (guessedLetters.includes(letter)) {
       
        return '<li class="letter">${letter}</li>';
    } else {
        // Otherwise, return a string that contains an underscore (_) wrapped in an <li> element with the class name "letter"
        return'<li class="letter">_</li>';
    }
   }).join("");
   // If the number of `wrongGuesses` is greater than or equal to the maximum number of `maxWrongGuesses` or the word has been guessed, it calls the `endGame` function
   if (wrongGuesses >= maxWrongGuesses || wordGuessed()) {
    endGame();
}
}


function updateGuessCount() {
    // Set the `innerText` property of the <p> element inside the "letters" <div> to a string that contains the number of `wrongGuesses` and the `maxWrongGuesses`
document.querySelector(".letters p").innerText = `${wrongGuesses} / ${maxWrongGuesses}`;
}
//function displays guessed word
function wordGuessed() {
    //this line of code is checking if all the characters in the displayedWord string are included in the guessedLetters array.
return displayedWord.split("").every(letter => guessedLetters.includes(letter));
}
//function that decides when game is over and displays if player won or lost
function endGame() {
if (wordGuessed()) {
    //  this displays Game won, else represents game lost
    console.log("You won!");
} else {


    console.log("You lost!");
}
}


 
//this is an array that randomly chooses a word along with the hint
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


getRandomWord()};
