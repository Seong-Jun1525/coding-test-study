/** 문제 설명
 * 정수 배열 arr와 2차원 정수 배열 queries이 주어집니다.
 * 
 * queries의 원소는 각각 하나의 query를 나타내며, [s, e, k] 꼴입니다.
 * 
 * 각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 k보다 크면서 가장 작은 arr[i]를 찾습니다.
 * 
 * 각 쿼리의 순서에 맞게 답을 저장한 배열을 반환하는 solution 함수를 완성해 주세요.
 * 
 * 단, 특정 쿼리의 답이 존재하지 않으면 -1을 저장합니다.
 */

/*
function solution(arr, queries) {
    var answer = [];
    let check = false;

    for(let i = 0; i < queries.length; i++) {
        // 해당 부분을 추출하여 새로운 배열로 만들고 정렬하기
        let sortArr = arr.slice(queries[i][0], queries[i][1] + 1);
        sortArr.sort((a, b) => a - b);
        // console.log(sortArr);
        for(let j = 0; j < sortArr.length; j++) {
            if(sortArr[j] > queries[i][2]) {
                answer.push(sortArr[j]);
                check = true;
                break;
            }
        }

        if(!check) answer.push(-1);
        else check = false;
    }

    return answer;
}
*/

// 시간복잡도를 최소화하여 작성한 코드
function solution(arr, queries) {
    return queries.map(([start, end, k]) => {
        let min = Infinity; // k보다 크면서 가장 작은 값을 저장할 변수 (초기값은 무한대)

        // start부터 end까지 순회하며 k보다 크면서 가장 작은 값 찾기
        for (let i = start; i <= end; i++) {
            if (arr[i] > k && arr[i] < min) {
                min = arr[i]; // 최소값 갱신
            }
        }

        // 만약 min 값이 갱신되지 않았다면 (-1 반환), 그렇지 않으면 최소값 반환
        return min === Infinity ? -1 : min;
    });
}


console.log(solution([0, 1, 2, 4, 3], [[0, 4, 2],[0, 3, 2],[0, 2, 2]]))