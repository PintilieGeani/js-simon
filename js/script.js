// **Descrizione:**
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// **NOTA**: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
// **BONUS:**
// - Inseriamo la validazione: se l'utente inserisce cose diverse da numeri lo blocchiamo in qualche modo.
// - Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.
// Consigli del giorno:
// - Pensate prima in italiano.
// - Dividete in piccoli problemi la consegna.
// - Individuate gli elementi di cui avete bisogno per realizzare il programma.
// - Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array"


// Risoluzione
/**
 * 1. Costruire la pagina con elementi basilari e generare i primi 5 numeri casuali e stampare in pagina, successivamente far sparire la prima parte del gioco lasciando solamente la seconda.
 */






// Prima parte
// Risoluzione codice: Generare 5 numeri casuali e unici e stampare ijn pagina
// Raccolta dati:
let mainList = document.getElementById("lista-principale")
console.log(mainList)
const bottone = document.getElementById("bottone")
console.log(bottone)

// Risoluzione
// Funzione per generare i 5 numeri random e unici
function random (){
    let randomArray = [Math.floor((Math.random() * 99) + 1)]

for (let i = 1; randomArray.length < 5; i++) {
    curElem = Math.floor(Math.random() * 99 + 1)
    if(!(randomArray.includes(curElem))){
        randomArray.push(curElem)
    }
}
return randomArray
}

nRandom = random()
console.log(nRandom)


// Stampa in pagina dei 5 numeri random
let listItem = ""
for(i = 0; i < nRandom.length; i++){
    curElem = nRandom[i]
    listItem += `<li>${curElem}</li>`
}
mainList.innerHTML = listItem


setTimeout(function(){
    mainList.classList.add("d-none")
}, 3000)








// Funzione in bottone

// bottone.addEventListener("click", function () {
//     function random() {
//         let randomArray = [Math.floor((Math.random() * 99) + 1)]

//         for (let i = 1; randomArray.length < 5; i++) {
//             curElem = Math.floor(Math.random() * 99 + 1)
//             if (!(randomArray.includes(curElem))) {
//                 randomArray.push(curElem)
//             }
//         }
//         return randomArray
//     }

//     nRandom = random()
//     console.log(nRandom)


//     // Stampa in pagina dei 5 numeri random
//     let listItem = ""
//     for (i = 0; i < nRandom.length; i++) {
//         curElem = nRandom[i]
//         listItem += `<li>${curElem}</li>`
//     }
//     mainList.innerHTML = listItem

//     setTimeout(function () {
//         mainList.classList.toggle("d-none")
//     }, 3000)

// })