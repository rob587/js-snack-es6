// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.


const bicycle = [
    {
        name: 'Ugo',
        weight: 30,
        year:2006
    },
    {
        name: 'Luca',
        weight: 20,
        year:2006
    },
    {
        name: 'Agostino',
        weight: 10,
        year:2006
    },
    {
        name: 'Fabio',
        weight: 40,
        year:2006
    },
    {
        name: 'Alessandro',
        weight: 25,
        year:2006
    }
]


let lightbicycle= bicycle[0]


for(let i=1; i<bicycle.length; i++){
   if(bicycle[i].weight<lightbicycle.weight){
    lightbicycle=bicycle[i]
   }
}

console.log(" la bicicletta col peso minore è:", lightbicycle.name, "con", lightbicycle.weight, "kg" )


//-----------------------//

// Snack2**
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const squads = [
    {   
        nome : "Milan",
        points: 0,
        fouls: 0
    },
    {   
        nome : "Juve",
        points: 0,
        fouls: 0
    },
    {   
        nome : "Inter",
        points: 0,
        fouls: 0
    },
    {   
        nome : "Napoli",
        points: 0,
        fouls: 0
    },
    {   
        nome : "Psg",
        points: 0,
        fouls: 0
    }
]

let min = 1
let max = 10

const randomNumber = (min, max) =>{
    const number = Math.floor(Math.random() * 10) + 1;
    return number
}

for (let i=0; i<squads.length; i++){
    squads[i].fouls= Math.floor(Math.random() * 10) + 1;
    squads[i].points= Math.floor(Math.random() * 10) + 1;
}

console.log(squads)

const newArray = [];

for (let j=0; j<squads.length; j++){
    const squad = squads[j]

    newArray.push({
        nome:squad.nome,
        fouls:squad.fouls
       
    })
}

console.log(newArray)
