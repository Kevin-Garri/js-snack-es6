//1.creare array di oggetti di squadre di calcio
//2.proprietà di ogni squadra: nome, punti fatti, falli subiti
//3.nome unica proprietà da compilare e settare a 0 tutto il resto
//4.numeri random al posto degli 0
//5.nuovo array con nomi e falli subiti

//1.
const SquadreArray = [
  //2.
  {
    nome: 'Juventus',
    puntiFatti: '0',
    falliSubiti: '0'
  },
  {
    nome: 'Milan',
    puntiFatti: '0',
    falliSubiti: '0'
  },
  {
    nome: 'Inter',
    puntiFatti: '0',
    falliSubiti: '0'
  },
  {
    nome: 'Fiorentina',
    puntiFatti: '0',
    falliSubiti: '0'
  }
  //3.
]
//4.
//numero casuale tra val min e max 0 incluso e 1 escluso
//mathfloor arrotonda per difetto il valore intero
//+min perchè garantisce valore casuale finale compreso tra min e max

/*function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
*/

let puntiFatti = 0
let falliSubiti = 0

for (let i in SquadreArray) {
  SquadreArray[i].puntiFatti = Math.floor(Math.random() * 50)
  SquadreArray[i].falliSubiti = Math.floor(Math.random() * 50)
}

//stampo array
console.log(SquadreArray);
//5.
//all'interno di push metto oggetto con queste 2 proprietà
let SquadreNomiFalli = []
// for (let i = 0; i < SquadreArray.length; i++) {
//   SquadreNomiFalli.push({
//     nome: SquadreArray[i].nome,
//     falliSubiti: SquadreArray[i].falliSubiti
//   })
// }

//for of Ad ogni iterazione JavaScript assegna alla variabile valore il contenuto di ciascun elemento dell'array. Ad ogni ciclo va a prendere l'elemento del ciclo.
for (let squadra of SquadreArray)
  SquadreNomiFalli.push({
    nome: squadra.nome,
    falliSubiti: squadra.falliSubiti
  });
console.log(SquadreNomiFalli);


