function solution(slice, n) {
    var answer = 0;
    
    answer = (Math.floor(n % slice) === 0) ? Math.floor(n / slice) : Math.floor(n / slice) + 1;
    
    return answer;
}

console.log(solution(4, 12));