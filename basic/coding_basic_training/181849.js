// 문자열 정수의 합
function solution(num_str) {
    var answer = 0;

    for(let i = 0; i < num_str.length; i++) {
        answer += parseInt(num_str[i]);
    }

    return answer;
}

console.log(solution("123456789"));