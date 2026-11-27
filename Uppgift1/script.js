const button = document.getElementById('randomBtn');

button.addEventListener('click', randomSite);

var links = [
    "Roguelikes.html",
    "Matematik.html",
    "Programmering.html",
    "Skrivande.html",
    "Esport.html"
];
/*Deklarerar ovan en array med alla sidor man ska kunna komma till via knappen.*/

function randomSite() {
    var random = Math.floor(Math.random() * links.length);
    /*Math.random() returnerar ett decimaltal mellan 0 och 1 slumpmässigt (1 är
    exkluderat). Vi multiplicerar det med links.length, som är 9. Vi får nu ett
    decimaltal mellan 0 och 9 slumpmässigt, där 9 är exkluderat. Math.floor 
    returnerar det största heltalet som är mindre eller lika med detta tal, och
    eftersom 9 är exkluderat så kommer det returnera något av heltalen 0, 1, 2, ..., 8.*/

    /*Sättet som en array är definierad i JavaScript är att links[0] är det första
    elementet i links, links[1] det andra och så vidare, så det nionde och sista
    elementet är links[8]. Vi tar då helt enkelt talet random ovan, som slumpats fram
    till något av heltalen 0-8, och gör så användaren tas till sidan links[random].*/

    window.open(links[random], "_self");
}