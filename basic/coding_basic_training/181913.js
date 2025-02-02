/**
 * 문제 설명
 * 문자열 my_string과 이차원 정수 배열 queries가 매개변수로 주어집니다.
 * 
 * queries의 원소는 [s, e] 형태로, my_string의 인덱스 s부터 인덱스 e까지를 뒤집으라는 의미입니다.
 * 
 * my_string에 queries의 명령을 순서대로 처리한 후의 문자열을 return 하는 solution 함수를 작성해 주세요.
 */

function solution(my_string, queries) {
    let arr = my_string.split("");

    for(let i = 0; i < queries.length; i++) {
        let str = arr.slice(queries[i][0], queries[i][1] + 1).reverse();
        arr.splice(queries[i][0], queries[i][1] - queries[i][0] + 1, ...str);
    }

    return arr.join("");
}

/**
 * 문자열을 배열처럼 접근은 가능하지만 배열에서 사용되는 메서드를 문자열에 적용할 순 없다
 * 
 * 그러므로 split("")을 통해 배열로 변환한것을 따로 변수에 저장하고 그 배열을 담은 변수를 활용하여 문제를 해결해야함
 * 
 * slice를 활용하여 특정부분을 추출하고 reverse을 통해서 뒤집고 그것을 str변수에 저장한다
 * 
 * 그리고 배열에 splice 메서드를 활용하여 특정부분의 원소를 변경한다
 * 
 * 
 * ** slice() 메서드
 * => 어떤 배열의 begin 부터 end 까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다.
 *      원본 배열은 바뀌지 않습니다.
 * 
 * ** splice() 메서드
 * => 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.
 */

console.log(solution("rermgorpsam", [[2, 3], [0, 7], [5, 9], [6, 10]]));