// 순서쌍의 개수
function solution(n) {
    var answer = 0;
    const arr = [];

    for(let i = 1; i <= n; i++) {
        if(n % i === 0) {
            arr.push(i);
        }
    }

    // console.log(arr);
    // console.log(arr.length);

    answer = arr.length;

    return answer;
}

console.log(solution(20));