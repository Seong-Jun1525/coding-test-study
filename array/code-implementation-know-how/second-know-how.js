// 값 교환하기
let a = 10;
let b = 5;

console.log(a, b);

let temp = a;
a = b;
b = temp;

console.log(a, b);
console.log("================================");

// 구조 분해 할당 적용해서 값 변환
let c = 13;
let d = 2;
[c, d] = [d, c];

console.log(c, d);