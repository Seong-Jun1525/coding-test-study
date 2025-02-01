/** 수열과 구간 쿼리 4
 * 문제 설명
 * 정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. queries의 원소는 각각 하나의 query를 나타내며, [s, e, k] 꼴입니다.
 * 
 * 각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 i가 k의 배수이면 arr[i]에 1을 더합니다.
 * 
 * 위 규칙에 따라 queries를 처리한 이후의 arr를 return 하는 solution 함수를 완성해 주세요.
 */

function solution(arr, queries) {
    var answer = [...arr];

    for(let i = 0; i < queries.length; i++) {
        for(let j = queries[i][0]; j <= queries[i][1]; j++) {
            if(j % queries[i][2] === 0) {
                answer[j]++;
            }
        }
        // console.log(answer);
    }

    return answer;
}

// 하...맞게 한거같은데 왜 틀리나 했더니
// arr 인덱스 값이 아니라 인덱스가 k의 배수였구나..ㅠㅠ
// 무슨말인가 했네 그래도 이해해서 다행이다

console.log(solution([0, 1, 2, 4, 3], [[0, 4, 1],[0, 3, 2],[0, 3, 3]]));