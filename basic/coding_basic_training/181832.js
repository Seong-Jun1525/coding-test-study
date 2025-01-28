function solution(n) {
    var answer = Array.from({ length: n }, () => Array(n).fill(0)); // 2차원 배열 초기화
    let count = 1;

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            answer[i][j] = count++;
        }
    }

    return answer;
}

console.log(solution(4));