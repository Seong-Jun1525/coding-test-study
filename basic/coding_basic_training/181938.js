// 두 수의 연산값 비교하기
function solution(a, b) {
    return Math.max(Number(`${a}${b}`), 2 * a * b);
}

console.log(solution(2, 91));
console.log(solution(91, 2));