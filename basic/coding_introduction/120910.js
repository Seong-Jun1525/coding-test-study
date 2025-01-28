function solution(n, t) {
    var answer = 0;
    
    for(let i = 0; i < t; i ++) {
        n *= 2;
    }

    answer = n;
    
    return answer;
}

console.log(solution(7, 15));