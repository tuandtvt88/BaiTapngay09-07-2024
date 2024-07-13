//Sử dụng filter để lọc ra các chuỗi có độ dài lớn hơn một ngưỡng cho trước từ một mảng các chuỗi.//
// Mảng các chuỗi
const strings = ["apple", "banana", "cherry", "date", "fig", "grape"];

// Ngưỡng độ dài
const lengthThreshold = 3;

// Sử dụng filter để lọc các chuỗi có độ dài lớn hơn ngưỡng cho trước
const filteredStrings = strings.filter(str => str.length > lengthThreshold);

console.log(filteredStrings);
