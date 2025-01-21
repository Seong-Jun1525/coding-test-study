// n의 배수 고르기
function solution(n, numList) {
    var answer = [];

    for(let i = 0; i < numList.length; i++) {
        console.log(numList[i]);
        if(numList[i] % n === 0) {
            answer.push(numList[i]);
        }  
    }

    return answer;
}

console.log(solution(12, [2, 100, 120, 600, 12, 12]));