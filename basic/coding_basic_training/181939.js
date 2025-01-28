// 더 크게 합치기
function solution(a, b) {
    var answer = 0;

    let result = parseInt(a + "" + b);
    let result2 = parseInt(b + "" + a);

    return answer = result > result2 ? result : result2;
}

/**
 * 다른 사람의 풀이를 본 결과
 * => return Math.max(Number(`${a}${b}`), Number(`${b}${a}`));
 * 
 * Math의 max 메서드를 사용
 * 백틱 기호를 사용하여 해당 정수를 문자열 형태로 나열하고 그걸 Number형으로 바꾸고
 * max로 비교해서 더 큰 값 반환
 */

console.log(solution(9, 91));