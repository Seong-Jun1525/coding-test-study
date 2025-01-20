// 스프레드 연산자

// 배열 병합
const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
const numbers = [...evenNumbers, ...oddNumbers];
console.log(numbers);
console.log("================================");

// 객체 병합
// 같은 키가 있을 경우 후에 병합한 키 값으로 변경됨.
const person = {
    familyName: 'Lim',
    givenName: 'Seong Jun',
    country: 'South Korea'
};

const address = {
    country: 'USA',
    city: 'NewYork'
};

const merge = { ...person, ...address };
console.log(merge);