//Sử dụng filter để lọc ra các đối tượng từ một mảng các đối tượng dựa trên một điều kiện cho trước.//
let people = [
    {name:'A',age:12},
    {name:'B',age:13},
    {name:'C',age:14},
    {name:'D',age:15}
];
let condition = person =>person.age >=13;
let filterpeople = people.filter(condition);
console.log(filterpeople);