const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]// sprade operator mor morethan one element

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

// Summary:
// There are two types of arrays: holey arrays and continuous arrays. These arrays can contain three types of elements: SMI (Small Integer), Packed Element, and Double.

// 1. **Holey Array**: A holey array is an array that contains missing or empty elements. For example, [1, 2, , 4] is a holey array because it has a missing element. Holey arrays are less optimized for performance.

// 2. **Continuous Array**: A continuous array is an array that does not contain missing or empty elements. For example, [1, 2, 3, 4] is a continuous array because it has no missing elements. Continuous arrays are more optimized for performance.

// In terms of optimization, continuous arrays are more efficient and optimized for various operations compared to holey arrays.
