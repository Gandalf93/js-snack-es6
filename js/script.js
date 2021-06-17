// Snack 1 Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal



// const ar = [
//     {
//         nome : 'bici1',
//         peso : 8
//     },
//     {
//         nome : 'bici2',
//         peso : 12
//     },
//     {
//         nome : 'bici3',
//         peso : 16
//     },
//     {
//         nome : 'bici4',
//         peso : 9
//     }

// ];

// let biciLeggera = ar[0];

// for(let i = 0; i < ar.length; i++){
//     if(ar[i].peso < biciLeggera.peso){
//         biciLeggera = ar[i];
//     }
// }

// // console.log(biciLeggera);

// const {nome, peso} = biciLeggera;
// console.log(nome, peso);

// document.getElementById('container').innerHTML = 
// `
// <ul>
//  <li>Nome: ${nome}</li>
//  <li>Peso: ${peso}</li>
// </ul>
// `
// ;


// Snack2 Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. (Utilizzate le arrow function). Infine usando la destrutturazione creiamo un nuovo array i cui elementi sono sempre degli oggetti che contengono solo nomi e falli subiti. Stampiamo tutto in console.



const squadre = [
    {
        nome : 'Cagliari',
        punti : 0,
        falli : 0
    },
    {
        nome : 'Napoli',
        punti : 0,
        falli : 0
    },
    {
        nome : 'Milan',
        punti : 0,
        falli : 0
    },
    {
        nome : 'Inter',
        punti : 0,
        falli : 0
    },
    {
        nome : 'Juve',
        punti : 0,
        falli : 0
    }
];
  
const randNum = (min , max ) => Math.floor(Math.random()*( max - min + 1) + min);

const newAr = [];

for (let i = 0; i < squadre.length; i++){
    let {nome, falli} = squadre[i];
    let punti = randNum(2, 10);
    falli = randNum(3, 15);
    // per cambiare l'array di oggetti squadre
    squadre[i].punti = punti;
    squadre[i].falli = falli;
    // serve per costruire il nuovo array di oggetti
    const elemento = { nome , falli};
    newAr.push(elemento);
}

console.log(squadre);
console.log(newAr);

