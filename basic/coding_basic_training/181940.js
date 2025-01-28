// 문자열 곱하기
function solution(my_string, k) {
    var answer = '';

    for(let i = 0; i < k; i++) {
        answer += my_string;
    }

    return answer;
}

/**
 * 다른 사람 풀이 본 결과
 * => return my_string.repeat(k)
 * 
 * repeat() 메서드로 간단하게 구현 가능
 * 
 * MDN 참조
 * => repeat() 메서드는 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환합니다.
 * 
 * 메서드를 많이 공부해야겠다..
 */

console.log(solution("string", 3));