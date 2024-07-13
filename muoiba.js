//Sử dụng reduce để tính tổng của các số trong một mảng số nguyên.//
// Mảng các số nguyên
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Sử dụng reduce để tính tổng các số trong mảng
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// In ra kết quả
console.log(sum); // Output: 55
