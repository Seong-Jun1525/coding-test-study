function solution(number, n, m) {
    var answer = 0;

    if(number % n === 0 && number % m === 0) answer++; 

    return answer;
}

console.log(solution(60, 2, 3));