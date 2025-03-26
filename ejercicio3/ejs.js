// Comparaciones con booleanos
console.log(false + false);//Output: 0
console.log(false + true);//Output: 1
console.log(true + true);//Output: 2

// Comparaciones con arrays
console.log([] === []);//Output:false
console.log([] + []);//Output: empty
console.log([1, 2] + [3, 4]);//Output:1,23,4
console.log([1] + 1);//Output:11
console.log([1] - 1);//Output:0

// Comparaciones con objetos
console.log({} + {}); //Output:[object Object][object Object]
console.log({} === {}); //Output:false
console.log([] === {}); //Output:false

// Comparaciones especiales
console.log(null + 1); //Output: 1
console.log(undefined + 1);//Output: NaN
console.log(null == 0);//Output:false
console.log(null <= 0);//Output:true
console.log(undefined == null);//Output: true

// Operaciones con NaN
console.log(NaN + 1);//Output: NaN
console.log(NaN == NaN);//Output: false
console.log(NaN === NaN);//Output: false