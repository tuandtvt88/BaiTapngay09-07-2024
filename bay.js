//Cho một đối tượng person với các thuộc tính như name, age, và gender, viết một đoạn mã sử dụng Spread Operator để thêm một thuộc tính mới là country có giá trị là "Vietnam".//
let person = {
    name:"G",
    age:22,
    gender:"male"
}
let person2 = {...person,country:"Việt Nam"}
console.log(person2)