//Sử dụng filter để lọc ra các đối tượng từ một mảng các đối tượng dựa trên một điều kiện cho trước.//
let arr = [4,5,6,7,8,8,87,9];
let obj = arr.reduce((objfind,currentValue) =>{
    if(!objfind[currentValue]){
        objfind[currentValue]=1
    }
    else {
        objfind[currentValue] = objfind[currentValue] + 1;

    }
    return objfind;
},{})
console.log(obj)