//Tạo một mảng mới bằng cách nối hai mảng arr1 và arr2 vào một mảng mới sử dụng spread operator.//
let arr1 = [1,2,3,4,5,6];
let arr2 = [7,8,9,10,11];
let newarr = [...arr1,...arr2];
console.log(newarr);