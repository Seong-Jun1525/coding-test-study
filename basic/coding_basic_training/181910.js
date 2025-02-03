/**
 * 문자열 my_string과 정수 n이 매개변수로 주어질 때,
 * my_string의 뒤의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.
 */

function solution(my_string, n) {
    var answer = '';

    for(let i = (my_string.length - n); i < my_string.length; i++) {
        answer += my_string[i];
    }

    return answer;
}

// 인덱스의 시작값을 my_string의 길이 - n으로 설정하고 끝까지 출력하면 됨

console.log(solution("ProgrammerS123", 11));
console.log(solution("He110W0r1d", 5));