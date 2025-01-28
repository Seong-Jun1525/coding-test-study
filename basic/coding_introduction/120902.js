// 문자열 계산기
function solution(my_string) {
    var answer = 0;

    let str = my_string.split(" ");
    answer = parseInt(str[0]);
    for(let i = 1; i < str.length; i+=2) {
        if(str[i] === "+") {
            answer += parseInt(str[i+1]);
        } else if(str[i] === "-") {
            answer -= parseInt(str[i+1]);
        }
    }

    return answer;
}

console.log(solution("3 + 4 - 2"));