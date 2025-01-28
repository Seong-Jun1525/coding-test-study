function solution(my_string) {
    var answer = '';

    answer = [...new Set(my_string)].join("");

    return answer;
}

console.log(solution("people"));