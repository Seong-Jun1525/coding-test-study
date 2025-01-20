// number type
console.log(typeof 10);
console.log(typeof -5);
console.log(typeof 3.14);
console.log(typeof Infinity);
console.log(typeof NaN);
console.log("==================================");
let a = 13;
let b = 4;

// built-in function(전역에서 호출할 수 있는 이미 정의된 메서드)
console.log(Math.abs(-a)); // 절대값, 13
console.log(Math.ceil(a / b)); // 올림, 4
console.log(Math.floor(a / b)); // 내림, 3
console.log(Math.round(a / b)); // 반올림, 3
console.log(Math.trunc(-a / b)); // 버림, -3 (내림의 경우 -4)
console.log(Math.pow(a, b)); // a의 b승 28561
console.log("==================================");

// 숫자 타입 비트 연산
console.log(a & b); // AND, 4
console.log(a | b); // OR, 13
console.log(a ^ b); // XOR, 9
console.log(~a); // NOT, -14
console.log(a << 2); // 왼쪽 쉬프트 (a * 2^2와 동일), 52
console.log(a >> 1); // 오른쪽 쉬프트 (a / 2^1과 동일), 6
console.log("==================================");

// 숫자 타입 예외
console.log(a / 0); // Infinity
console.log(a % 0); // NaN
console.log(a / "string"); // NaN
console.log(a % "string"); // NaN
console.log(a / null); // Infinity
console.log(a % null); // NaN
console.log(a / undefined); // NaN
console.log(a % undefined); // NaN
console.log("==================================");

// 부동소수점 문제
// js는 부동소수점 데이터를 이진법으로 표현하기 때문에 표현과정에서 오차 발생함. <= epsilon이라고 함.
// 코테에서 부동소수점 데이터를 다룰 때 epsilon이 발생해서 일부 테스트 케이스가 실패할 수 있음 
console.log(Number.EPSILON);
let c = 0.1 + 0.1 + 0.1;
let d = 0.3;
console.log(c - b);
if (Math.abs(c - b) < Number.EPSILON) {
    console.log("a 와 b는 같다")
}
else {
    console.log("a와 b는 다르다")
}
