const n = "1234";

function solution(n) {
    var answer = 0;
    const nList = n.split();
    for(let i = 0; i < nList.length; i++) {
        answer += parseInt(nList[i]);
    }
    return answer;
}

console.log(solution(n));