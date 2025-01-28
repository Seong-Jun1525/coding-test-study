// 문자 정렬하기
function solution(my_string) {
    var answer = [];

    for(let i = 0; i < my_string.length; i++) {
        if(parseInt(my_string[i]) >= 0) {
            answer.push(parseInt(my_string[i]));
        } 
    }

    return answer.sort();
}

console.log(solution("hi12392"));