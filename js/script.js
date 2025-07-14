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
