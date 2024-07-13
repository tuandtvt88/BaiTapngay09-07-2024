//Sử dụng filter để lọc ra các chuỗi không chứa ký tự số từ một mảng các chuỗi.//
// Hàm kiểm tra chuỗi có chứa ký tự số hay không
function hasNumber(str) {
    return /\d/.test(str);
}

// Mảng các chuỗi
const strings = ["hello", "world123", "example", "test456", "nodejs", "openai1"];

// Sử dụng filter để lọc ra các chuỗi không chứa ký tự số
const stringsWithoutNumbers = strings.filter(str => !hasNumber(str));

// In ra kết quả
console.log(stringsWithoutNumbers);
