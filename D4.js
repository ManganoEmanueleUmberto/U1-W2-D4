/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const area = function (l1, l2) {
  return l1 * l2
}
console.log("Esercizio 1")
console.log("L'area del rettangolo è: ", area(12, 10))

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function (a, b) {
  if (typeof a === "number" && typeof b === "number") {
    if (a === b) {
      return (a + b) * 3
    } else {
      return a + b
    }
  } else {
    return "Non hai inserito un numero"
  }
}
console.log("Esercizio 2")
console.log("La somma dei due parametri inseriti è: ", crazySum(10, 10))
console.log("La somma dei due parametri inseriti è: ", crazySum(10, 12))

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazyDiff = function (a) {
  if (typeof a === "number") {
    if (Math.abs(a) > 19) {
      return (Math.abs(a) - 19) * 3
    } else {
      return Math.abs(a) - 19
    }
  } else {
    return "Non hai inserito un numero"
  }
}
console.log("Esercizio 3")
console.log("La differenza è: ", crazyDiff(119))
console.log("La differenza è: ", crazyDiff(-119))
console.log("La differenza è: ", crazyDiff(1))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const boundary = function (n) {
  if (typeof n === "number") {
    if ((n >= 20 && n <= 100) || n === 400) {
      return true
    } else {
      return false
    }
  }
}
console.log("Esercizio 4")
console.log(boundary(30))
console.log(boundary(400))
console.log(boundary(10))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const epify = function (string) {
  if (typeof string === "string") {
    if (string.toUpperCase() === "EPICODE") {
      return string
    } else {
      return string + " EPICODE"
    }
  }
}
console.log("esercizio 5")
console.log(epify("ciao"))
console.log(epify("epicode"))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const check3and7 = function (n) {
  if (typeof n === "number" && n > 0) {
    if (n % 3 === 0) {
      console.log("Il numero", n, " è divisibile per 3")
    } else if (n % 7 === 0) {
      console.log("Il numero", n, " è divisibile per 7")
    } else {
      console.log("Il numero", n, "non è divisibile nè per 3 nè per 7")
    }
  }
}
console.log("Esercizio 6")
check3and7(6)
check3and7(14)
check3and7(2)

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const reverseString = function (string) {
  let newString = string.split("")
  newString = newString.reverse()
  newString = newString.join("")
  return newString
}
console.log("Esercizio 7")
console.log(reverseString("ciao"))
console.log(reverseString("EPICODE"))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const cutString = function (string) {
  let newString = string.slice(0, -1)
  newString = newString.slice(1, newString.length)
  return newString
}
console.log("Esercizio 9")
console.log(cutString("ciao"))
console.log(cutString("Ciao mi chiamo emanuele"))

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const giveMeRandom = function (n) {
  let array = []
  for (let i = 0; i < n; i++) {
    array[i] = Math.floor(Math.random() * 10)
  }
  return array
}
console.log("Esercizio 10")
console.log(giveMeRandom(5))
