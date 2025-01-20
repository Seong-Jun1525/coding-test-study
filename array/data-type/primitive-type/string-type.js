// string type
// 문자열 지정 방법 3가지 : '', "", ``
const a = "Hello a";
const b = 'Hello b';
const c = `Hello Javascript , ${a + b}`;
const d = `
    *
    **
    ***
`;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log("==================================");

console.log(a + 1);
console.log(a + b);
console.log(a + true);
console.log("==================================");

// built-in function
console.log(a.length);
console.log(a.split(",")); // 특정 문자열 기준으로 나누기 ★★★
console.log(a.startsWith("Hello")); // 특정 문자열로 시작하는지 확인하고 boolean 타입 반환
console.log(a.endsWith("World")); // 특정 문자열로 끝나는지 확인하고 boolean 타입 반환
console.log(a.includes("llo")); // 특정 문자열을 포함하는지 확인하고 boolean 타입 반환
console.log(a.indexOf("l")); // 특정 문자열의 마지막 위치 확인하고 해당 인덱스 값 반환
console.log(a.replace("Hello", "Bye")); // 특정 문자열을 다른 문자열로 대체
console.log(a.toUpperCase());
console.log(a.toLowerCase());
console.log(a.trim()); // 양쪽 공백 제거 ★★★
console.log(a.contact("!!!!@")); // 문자열 연결
