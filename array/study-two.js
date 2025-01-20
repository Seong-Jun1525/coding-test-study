let arr = [1, 2, 3];

// 데이터 삽입
// 마지막에 삽입
arr.push(4, 5);                 // push 메서드
arr = arr.concat([6, 7, 8]);    // concat 메서드
arr = [...arr, ...[9, 10]];     // 스레드 연산자

// 맨 앞에 삽입
arr.unshift(0);                 // unshift 메서드

// 중간에 삽입
arr.splice(2, 0, 9999);         // splice 메서드
console.log(arr);
console.log("================================");

// 데이터 삭제
// 마지막 데이터 삭제
const popValue = arr.pop();
console.log("popValue : " + popValue);

// 맨 앞 데이터 삭제
const shiftValue = arr.shift();
console.log("shiftValue : " + shiftValue);

const spliceValue = arr.splice(4, 3);
console.log("spliceValue : " + spliceValue);

console.log(arr);
console.log("================================");

// 배열에 제곱 연산 적용
const numbers = [...new Array(10)].map((_, i) => i + 1); // i++로 하면 0부터, i+1로 하면 1부터
console.log(numbers);
console.log("================================");

const squares = numbers.map((i) => i * i);
console.log(squares);
console.log("================================");

const even = numbers.filter((i) => i % 2 === 0);
console.log(even);
console.log("================================");

const sum = numbers.reduce((a, b) => a + b);
// 매개변수 2개이어야 함.
// 첫 번째 매개변수는 합쳐진 상태.
// 두 번째 매개변수는 순회하며 바라보는 데이터.
console.log(sum);