// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// - creare un array vuoto
//   - creare una funzione per generare num random
//   - ciclo per generare 5 numeri casuali nell'array / bonus: controllare che siano univoci
//   - pushiamo ogni num nell array vuoto
//   - stampiamo in pagina i numeri generati
//   - nascondo i numeri visualizzati con il css dopo tot secondi
//   - far comparire 5 prompt dopo tot secondi


let arrayCasual = [];
let casuali = document.getElementById("numCasual");
let risultato = document.getElementById("numOk");
let arrayPlayer = [];

for( let i = 0; i < 5; i++){
  let numPc = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  if( arrayCasual.includes(numPc)){
      i--;
  }else{
      arrayCasual.push(numPc);
  }
}

console.log(arrayCasual);

casuali.append(`I numeri da ricordare sono: ${arrayCasual}`);

setTimeout(nascondino, 3000);
function nascondino(){
  casuali.classList.add("d-none");
}

setTimeout(numsUtente, 4000);
function numsUtente(){
  for (let k = 0; k < 5; k++){
    let numPlayer = parseInt(prompt("Inserisci un numero"));
    arrayPlayer.push(numPlayer);
  }

  const numsGiusti = [];
	for(let k = 0; k < arrayPlayer.length; k++) {
		
		if(arrayCasual.includes(arrayPlayer[k]) == true) {
			numsGiusti.push(arrayPlayer[k]);
		}
	}

  console.log(arrayPlayer);
  console.log(numsGiusti);
  risultato.append(`Hai indovinato ${numsGiusti.length} numeri che sono: ${numsGiusti}`);
}
