// Stage detection
let choiceStage = true;

let wordHolder = [];
let bubbles = [];

let counter = 0;
let tr = 0;

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

    dream = loadImage("assets/cloud.jpg");
}

function setup() {
    createCanvas(600, 600);

    // Pass the JSON values into constructors
    let space = 200;
    bubbles[0] = new bubble(wordHolder[0], 100, 100);
    bubbles[1] = new bubble(wordHolder[1], 100 + space, 100);
    bubbles[2] = new bubble(wordHolder[2], 100 + 2 * space, 100);
    bubbles[3] = new bubble(wordHolder[3], 100, 250);
    bubbles[4] = new bubble(wordHolder[4], 100 + space, 250);
    bubbles[5] = new bubble(wordHolder[5], 100 + 2 * space, 250);
    bubbles[6] = new bubble(wordHolder[6], 100, 400);
    bubbles[7] = new bubble(wordHolder[7], 100 + space, 400);
    bubbles[8] = new bubble(wordHolder[8], 100 + 2 * space, 400);

    myChoice.start();
}

function draw() {
    if (choiceStage) {
        background(200);

        textAlign(CENTER);
        textSize(18);
        text("Read aloud three keywords that best describe your dream.", 300, 550)

        // Display the bubbles
        for (i = 0; i < 9; i++) {
            if (!bubbles[i].selected) {
                bubbles[i].display();
            } else if (bubbles[i].selected) {
                bubbles[i].display_selected();
                counter++;
            }
        }
        if (counter > 3) {
            choiceStage = false;
            counter = 0;
        }

    } else if (!choiceStage) {
        background(200);
        frameRate(20);
        tint(255, tr);
        image(dream, 0, 0);
        tr++
    }


}

function parseResult() {
    let mostrecentword = myChoice.resultString.split(' ').pop();
    if (mostrecentword.indexOf("cloud") !== -1) {
        bubbles[0].selected = true;
    } else if (mostrecentword.indexOf("dream") !== -1) {
        bubbles[1].selected = true;
    } else if (mostrecentword.indexOf("catch") !== -1) {
        bubbles[2].selected = true;
    } else if (mostrecentword.indexOf("float") !== -1) {
        bubbles[3].selected = true;
    } else if (mostrecentword.indexOf("cable") !== -1) {
        bubbles[4].selected = true;
    } else if (mostrecentword.indexOf("spirit") !== -1) {
        bubbles[5].selected = true;
    } else if (mostrecentword.indexOf("sad") !== -1) {
        bubbles[6].selected = true;
    } else if (mostrecentword.indexOf("threat") !== -1) {
        bubbles[7].selected = true;
    } else if (mostrecentword.indexOf("pretty") !== -1) {
        bubbles[8].selected = true;
    } else if (mostrecentword.indexOf("hey") !== -1) {
        console.log("hey");
    }
    console.log(mostrecentword);
}

// function visual() {

// }

// function choice() {

// }