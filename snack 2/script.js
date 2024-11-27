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
function gerRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


//stampo array
console.log(SquadreArray);

//5.


