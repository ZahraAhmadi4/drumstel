/*Allereerst een console.log om te testen of mijn javascript bestand gekoppeld 
is aan mijn HTML en of het werkt.*/
console.log("Dit is mijn eindopdracht voor het vak Inleiding Programmeren!");


// Bron emoticon plaatjes: Geraadpleegd op 08-06-2020, van https://www.cleanpng.com/free/emoticon,2.html
var moodArray = ["meh.png", "great.png", "sad.png"];


/* variabelen gemaakt voor het select blokje en de paragraph waar het antwoord 
in komt te staan. */

var choose = document.querySelector("select");
var answer = document.querySelector("#antwoord");



function mood() {
  var choice = choose.value; //dit aangemaakt zodat ik er een if mee kon maken en het choose zou selecteren.

  if (choice == "great") {
    answer.textContent = "Allright, well lets start with making a beat then";
    document.querySelector("img").src = "images/" + moodArray[1];

  } else if (choice == "meh") {
    answer.textContent = "Oh, I hope the beats here make you happy again";
    document.querySelector("img").src = "images/" + moodArray[0];

  } else if (choice == "sad") {
    answer.textContent = "Don't be sad. Just turn up the beat and you'll be fine again";
    document.querySelector("img").src = "images/" + moodArray[2];
  } 
}

choose.addEventListener("change", mood);




//Hier maak ik variabelen voor clap, hihat, kick, snare en tom om de buttons mee te nemen uit mijn HTML document.
var clapButton = document.querySelector("#clap"); 
var hihatButton = document.querySelector("#hihat");
var kickButton = document.querySelector("#kick");
var snareButton = document.querySelector("#snare");
var tomButton = document.querySelector("#tom");




// Hier heb ik een Array gemaakt om verschillende afbeeldingen te tonen per button.
var messageArray = ["clap.png", "hihat.png", "kick.png", "snare.png", "tom.png"];



// Bron audio: Geraadpleegd op 02-06-2020, van https://99sounds.org/drum-samples/


//Function aangemaakt voor elk button om waarde mee te geven door audio en foto's eraan toe te voegen.
function clap(){
	// Een test om te kijken of de function werkt: console.log('clap it');
	var clapSound = new Audio("./audio/clap.wav");
	clapSound.play();	
	document.querySelector("img").src = "images/" + messageArray[0];


}

function hihat(){
	// Een test om te kijken of de function werkt: console.log('hihat it');
	var hihatSound = new Audio("./audio/hihat.wav");
	hihatSound.play();
	document.querySelector("img").src = "images/" + messageArray[1];

}

function kick(){
	// Een test om te kijken of de function werkt: console.log('kick it');
	var kickSound = new Audio("./audio/kick.wav");
	kickSound.play();
	document.querySelector("img").src = "images/" + messageArray[2];

}

function snare(){
	// Een test om te kijken of de function werkt: console.log('snare it');
	var snareSound = new Audio("../audio/snare.wav");
	snareSound.play();
	document.querySelector("img").src = "images/" + messageArray[3];

}

function tom(){
	// Een test om te kijken of de function werkt: console.log('tom it');
	var tomSound = new Audio("./audio/tom.wav");
	tomSound.play();
	document.querySelector("img").src = "images/" + messageArray[4];

}



//Hier roep ik de variabelen, de functies en de array aan, zodat mijn applicatie werkt. 



clapButton.addEventListener("mouseover", clap); 
hihatButton.addEventListener("mouseover", hihat);
kickButton.addEventListener("mouseover", kick);
snareButton.addEventListener("mouseover", snare);
tomButton.addEventListener("mouseover", tom);


