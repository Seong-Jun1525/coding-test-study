// n의 배수
function solution(num, n) {
    return num % n == 0 ? 1 : 0;
}

console.log(solution(98, 2));
console.log(solution(34, 3));