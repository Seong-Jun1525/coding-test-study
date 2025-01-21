// 피자 나눠 먹기(2) 미해결
function solution(n) {
    var answer = 0;

    console.log(n % 6);
    
    answer = n % 6 === 0 ? n / 6 : Math.floor(n / 6) + 6 % n;
    
    return answer;
}

console.log(solution(4));