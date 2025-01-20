// 구조 분해 할당
// ES6에 추가된 문법으로 배열이나 객체에서 요소를 분해하는 기능.

// 배열 구조 분해 할당
const arr = ['hello', 'world', '!'];
const [first, second] = arr;
console.log(first, second);

// 객체 구조 분해 할당
const obj = { name: '임성준', age: 25 }
const { name, age } = obj;

console.log(name, age);

// 만약 다른 변수명으로 구조 분해 할당을 할 경우
const { name: myName, age: myAge } = obj;
console.log(myName, myAge);

/** name에 밑줄 그어진 이유
 * vscode에서는 node를 사용하는지와 관계없이 typescript 파일을 사용함
 * 이미 존재하는 상수 name을 덮어써서 발생한 것
 * 
 * 신경안써도 되지만 settings 에서 javascript.validate.enable를 찾아서 false 로 바꿔주면 해결
 */