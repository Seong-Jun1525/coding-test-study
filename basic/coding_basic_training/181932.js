// 코드 처리하기
function solution(code) {
    var answer = '';
    let mode = 0;

    for(let i = 0; i < code.length; i++) {
        if(code[i] === "1") mode = mode === 0 ? 1 : 0;
        else {
            if(mode === 0) answer += i % 2 === 0 ? code[i] : "";
            else if(mode === 1) answer += i % 2 !== 0 ? code[i] : "";
        }
    }

    return answer.length === 0 ? "EMPTY" : answer;
}

console.log(solution("abc1abc1abc"));