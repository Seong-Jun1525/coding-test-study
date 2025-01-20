// 비구조화 할당
// 함수에 객체를 인수로 전달할 때 필요한 것만 꺼내서 사용할 수 있는 문법 기능.
// 구조 분해 할당과 유사하게 사용할 수 있음.
const makePerson = ({ familyName, givenName, address }) => {
    return {
        name: `${givenName} ${familyName}`,
        address,
    };
};

const person = makePerson({
    familyName: 'Lim',
    givenName: 'Seong Jun',
    address: 'Incheon',
    country: 'South Korea'
});

console.log(person);