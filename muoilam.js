//Sử dụng reduce để tìm giá trị lớn nhất trong một mảng số nguyên.//
// Mảng các số nguyên
const numbers = [10, 5, 8, 21, 32, 7, 13, 4];

// Sử dụng reduce để tìm giá trị lớn nhất trong mảng
const max = numbers.reduce((accumulator, currentValue) => {
    return currentValue > accumulator ? currentValue : accumulator;
}, numbers[0]);

// In ra kết quả
console.log(max); // Output: 32
