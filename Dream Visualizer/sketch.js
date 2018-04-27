let choiceStage;
let visualStage;

let wordHolder = [];

// // ES Modules syntax
// import Unsplash from 'unsplash-js';

// // require syntax
// const Unsplash = require('unsplash-js').default;

// const unsplash = new Unsplash({
//   applicationId: "{25547}",
//   secret: "{2b25453fe1451b7b2ef4e27d04a0aba01d4cd6b7e650ef2678c66bddf56c1d19}",
//   callbackUrl: "{CALLBACK_URL}"
// });

function preload() {
    pokemonJSON[1] = loadJSON("pk1.json");
    pokemonJSON[2] = loadJSON("pk2.json");
    pokemonJSON[3] = loadJSON("pk3.json");
    pokemonJSON[4] = loadJSON("pk4.json");

    pkmlogo = loadImage("Assets/International_Pokémon_logo.png");
    pkmlogoGrey = loadImage("Assets/International_Pokémon_logo_grey.png");
    grass = loadImage("Assets/grass.png");
    fire = loadImage("Assets/fire.png");
    water = loadImage("Assets/water.png");
    bul = loadImage("Assets/1.png");
    cha = loadImage("Assets/2.png");
    tur = loadImage("Assets/3.png");
    tgp = loadImage("Assets/4.png");

    sfr = loadFont('Assets/SanFranciscoText-Regular.otf');
    sfsb = loadFont('Assets/SanFranciscoText-Semibold.otf');
}

function setup() {
    createCanvas(800, 800);

    // Pass the JSON values into constructors
    pokemonStats[1] = new pokemon(pokemonJSON[1]);
    pokemonStats[2] = new pokemon(pokemonJSON[2]);
    pokemonStats[3] = new pokemon(pokemonJSON[3]);
    pokemonStats[4] = new pokemon(pokemonJSON[4]);
}

function draw() {
    background(220);
} 