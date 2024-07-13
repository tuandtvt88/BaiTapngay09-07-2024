//Sử dụng reduce để tính tổng của các giá trị số trong một mảng các đối tượng, với mỗi đối tượng có một thuộc tính số cần tính tổng.//
// Mảng các đối tượng, mỗi đối tượng có một thuộc tính 'value' cần tính tổng
const items = [
    { name: 'item1', value: 10 },
    { name: 'item2', value: 20 },
    { name: 'item3', value: 30 },
    { name: 'item4', value: 40 }
];

// Sử dụng reduce để tính tổng các giá trị của thuộc tính 'value'
const totalValue = items.reduce((accumulator, currentItem) => accumulator + currentItem.value, 0);

// In ra kết quả
console.log(totalValue); // Output: 100
