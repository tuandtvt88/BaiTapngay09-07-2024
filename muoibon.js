//Sử dụng reduce để tính tích của các số trong một mảng số nguyên.//
// Mảng các số nguyên
const numbers = [1, 2, 3, 4, 5];

// Sử dụng reduce để tính tích các số trong mảng
const product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

// In ra kết quả
console.log(product); // Output: 120
