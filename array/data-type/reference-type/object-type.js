// object type
const obj = {
    name: 'SeongJun',
    age: 25,
    'full-name': 'Lim Seong Jun'
};

console.log(obj);
console.log(obj["full-name"]);
console.log("==================================");

// 요소 추가 방법
obj.email = 'seongjun@naver.com';
console.log(obj);
console.log("==================================");

// 요소 삭제 방법
delete obj["full-name"];
console.log(obj);

console.log("==================================");
console.log("==================================");
// 배열
const arr = [1, 2, 3];
console.log(arr[2]);
console.log(arr.length);

// 요소 추가
arr.push(5);
console.log(arr);

// 요소 삭제
const value = arr.pop(2);
console.log(arr);
console.log(value);