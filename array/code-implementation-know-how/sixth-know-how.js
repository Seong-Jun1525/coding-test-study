// &&와 || 연산자로 조건문 대체
// func함수는 flag가 true면 실행
// flag && func();

// 객체 병합에도 이용 가능. showAddress가 true면 객체 병합
const makeCompany = (showAddress) => {
    return {
        name: 'Jun',
        ...showAddress && { address: 'Seoul' } // showAddress가 true면 뒤 객체에 스프레드 연산자 적용
    };
};

console.log(makeCompany(false));
console.log(makeCompany(true));

const participantName = 0;

const name = participantName || 'Guest';
console.log(name);