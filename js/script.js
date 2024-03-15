/*
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/

alert("Clicca sul tasto play per giocare!");
//Selezione il bottone e lo metto in ascolto
const btn = document.querySelector("#btn");
btn.addEventListener("click", function(){
    
    //Seleziono la griglia
    const mainGrid = document.querySelector(".gridcontainer");
    //Tolgo la classe display:none e aggiungo display flex per farla apparire
    mainGrid.classList.remove("d-none");
    mainGrid.classList.add("d-flex");

//Utilizzo un ciclo per crearmi 100 quadrati ed aggiungergli le rispettive classi
for(let i = 1; i <=100 ; i++){
    const createdSquare = document.createElement("div");
    createdSquare.classList.add("square","square-base");
    createdSquare.innerHTML = `<span>${i}</span>`;

    //Per ogni click sulla cella aggiungo la classe ai miei quadrati e stampo in console il numero della cella cliccata
    createdSquare.addEventListener("click", function(){
        createdSquare.classList.toggle("back-blue");
        console.log("la cella cliccata è la numero " + i)
    })
    mainGrid.append(createdSquare)
    }
})
