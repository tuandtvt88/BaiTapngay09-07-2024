//Cho hai đối tượng obj1 và obj2, viết một đoạn mã sử dụng Spread Operator để tạo một đối tượng mới chứa tất cả các thuộc tính từ cả hai đối tượng.//
let obj1 = {
    id:1,
    name: "B",
    age:22
}
let obj2 = {
    city:'QN',
    town: "C",
    add:23
}
let obj3 = {...obj1,...obj2};
console.log(obj3);