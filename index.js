const artists = ["Janelle Monae", "Sza", "Thunder Cat", "Frank Ocean"];

const numberedArtists = artists.map(function (artist, index) {
   // Add 1 to index for starting number from 1
   // Combine number, period, and artist name with string interpolation
   return `${index + 2}. ${artist}`;
});

console.log(numberedArtists);

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(number => number * 2);
const exponentNumber = numbers.map(number => number ** 2)
console.log(exponentNumber)

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

const singers = ["janelle fkdf", "sza", "thunder Cat", "frank Ocean"];

const capitalizedSingers = singers.map(singer => {
   // Access first character, capitalize, combine with rest of the string
   return singer[0].toUpperCase() + singer.slice(1);
});

console.log(capitalizedSingers); // Output: ["Janelle Monae", "Sza", "Thunder Cat", "Frank Ocean"]

// const singers = ["janelle Monae", "sza", "thunder Cat", "frank Ocean"];
// const capitalizedSingers = [];

// for (let i = 0; i < singers.length; i++) {
//    const singer = singers[i];
//    const capitalizedSinger = singer[0].toUpperCase() + singer.slice(1);
//    capitalizedSingers.push(capitalizedSinger);
// }

// console.log(capitalizedSingers); // Output: ["Janelle Monae", "Sza", "Thunder Cat", "Frank Ocean"]

// ///////////////////////////////////////////////////////////////////////////////////////////////////
// const products = ["apple", "banana", "orange"];

// const productObjects = products.map(product => ({
//    name: product,
//    price: Math.random() * 10, // Random price between 0 and 10
// }));

// console.log(productObjects); // Output: Array of objects with name and price
const players = ['messi', 'rebery', 'ronaldo', 'haland']
const costOfPlayer = players.map(cost => ({
   name: cost,
   price: Math.floor(Math.random() * 100),

}))
console.log(costOfPlayer)
