//1.creare array di oggetti
//2.ogni oggetto descriverà bici con proprietà: nome e peso
//3.trova oggetto con peso minore
//4.stampare la bici con peso minore

//1.
const biciArray = [
  //2.
  {
    nome: 'tandem',
    peso: '25kg'
  },
  {
    nome: 'mountain bike',
    peso: '30kg'
  },
  {
    nome: 'Santa Cruz',
    peso: '20kg'
  }
]
//3.
let biciLeggera = biciArray[0]//indice prima bici
for (let i = 0; i < biciArray.length; i++) {
  if (biciArray[i].peso < biciLeggera.peso) { //confronto pesi
    biciLeggera = biciArray[i];
  }
}
//4.
console.log('la bici con peso minore è:', biciLeggera.nome);
