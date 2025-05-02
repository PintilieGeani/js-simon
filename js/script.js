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
 * 2. Raccogliere i dati del form
 * 3. Scrivere una funzione che confronta i numeri inseriti con l'array di numeri generato e salva su un contatore quanti sono presenti.
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
function random() {
    let randomArray = [Math.floor((Math.random() * 99) + 1)]

    for (let i = 1; randomArray.length < 5; i++) {
        curElem = Math.floor(Math.random() * 99 + 1)
        if (!(randomArray.includes(curElem))) {
            randomArray.push(curElem)
        }
    }
    return randomArray
}

nRandom = random()
console.log(nRandom)


// Stampa in pagina dei 5 numeri random
let listItem = ""
for (i = 0; i < nRandom.length; i++) {
    curElem = nRandom[i]
    listItem += `<li>${curElem}</li>`
}
mainList.innerHTML = listItem


setTimeout(function () {
    mainList.classList.add("d-none")
}, 3000)


// Seconda parte
// Raccolta dati
const formElemnt = document.getElementById("numeri-form")
const btnSubmit = document.getElementById("submit")
const n1Element = document.getElementById("n1")
const n2Element = document.getElementById("n2")
const n3Element = document.getElementById("n3")
const n4Element = document.getElementById("n4")
const n5Element = document.getElementById("n5")
const risultato = document.getElementById("risultato")

console.log(n1Element, n2Element, n3Element, n4Element, n5Element)


formElemnt.addEventListener("submit", function () {
    event.preventDefault()
    let n1Number = parseInt(n1Element.value)
    console.log(n1Number)
    let n2Number = parseInt(n2Element.value)
    console.log(n2Number)
    let n3Number = parseInt(n3Element.value)
    console.log(n3Number)
    let n4Number = parseInt(n4Element.value)
    console.log(n4Number)
    let n5Number = parseInt(n5Element.value)
    console.log(n5Number)

    let counter = 0

    if (nRandom.includes(n1Number)) {
        counter = counter + 1
    }if(nRandom.includes(n2Number) && n2Number!==n1Number){
        counter = counter + 1
    }if(nRandom.includes(n3Number) && n3Number!==n1Number && n3Number!==n2Number){
        counter = counter + 1
    }if(nRandom.includes(n4Number) && n4Number!==n1Number && n4Number!==n2Number && n4Number!==n3Number){
        counter = counter + 1
    }if(nRandom.includes(n5Number) && n5Number!==n1Number && n5Number!==n2Number && n5Number!==n3Number && n5Number!==n4Number ){
        counter = counter + 1
    }

    risultato.innerHTML = `Complimenti hai indovinato ${counter} numeri`

})




































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