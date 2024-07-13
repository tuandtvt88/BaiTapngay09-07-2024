//Sử dụng filter để lọc ra các số nguyên tố từ một mảng số nguyên.//
// Hàm kiểm tra số nguyên tố
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

// Mảng các số nguyên
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// Sử dụng filter để lọc ra các số nguyên tố
const primeNumbers = numbers.filter(isPrime);

// In ra kết quả
console.log(primeNumbers);
