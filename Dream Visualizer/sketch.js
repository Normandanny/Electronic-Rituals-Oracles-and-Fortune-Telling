// Stage detection
let choiceStage;
let visualStage;

let wordHolder = [];
let bubbles = [];

// // ES Modules syntax
// import Unsplash from 'unsplash-js';

// // require syntax
// const Unsplash = require('unsplash-js').default;

// const unsplash = new Unsplash({
//   applicationId: "{25547}",
//   secret: "{2b25453fe1451b7b2ef4e27d04a0aba01d4cd6b7e650ef2678c66bddf56c1d19}",
//   callbackUrl: "{CALLBACK_URL}"
// });

// Speech Recognition Initialization
let myChoice = new p5.SpeechRec('en-US', parseResult);
myChoice.continuous = true;
myChoice.interimResults = true; // allow partial recognition (faster, less accurate)

function preload() {
    wordHolder = loadJSON("words.json");

    // pkmlogo = loadImage("Assets/International_Pokémon_logo.png");
}

function setup() {
    createCanvas(800, 800);

    // Pass the JSON values into constructors
    bubbles[1] = new bubble(wordHolder, 100, 100);
}

function draw() {
    background(200);

    bubbles[1].display();
}

// function parseResult() {
//     let mostrecentword = myRec.resultString.split(' ').pop();
//     if (mostrecentword.indexOf("left") !== -1) {
//         dx = -1;
//         dy = 0;
//     } else if (mostrecentword.indexOf("right") !== -1) {
//         dx = 1;
//         dy = 0;
//     } else if (mostrecentword.indexOf("up") !== -1) {
//         dx = 0;
//         dy = -1;
//     } else if (mostrecentword.indexOf("down") !== -1) {
//         dx = 0;
//         dy = 1;
//     } else if (mostrecentword.indexOf("clear") !== -1) {
//         background(255);
//     }
//     console.log(mostrecentword);
// }

// function visual() {

// }

// function choice() {
    
// }