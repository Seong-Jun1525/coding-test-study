// 홀짝에 따라 다른 값 반환하기
function solution(n) {
    var answer = 0;

    for(let i = 1; i <= n; i++) {
        if(n % 2 === 0) {
            answer += (i % 2 === 0) ? i ** 2: 0;
        } else if(n % 2 !== 0) {
            answer += (i % 2 !== 0) ? i : 0;
        }
    }
    
    return answer;
}

console.log(solution(7));
console.log(solution(10));