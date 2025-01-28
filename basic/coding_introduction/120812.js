function solution(array) {
    let answer = -1; // 최빈값 결과 저장
    let maxFrequency = 0; // 최대 빈도수
    const frequencyMap = new Map(); // 각 숫자의 빈도수를 저장할 Map 객체

    // 1. 빈도수 계산
    for (const num of array) {
        // 현재 숫자의 빈도수를 1 증가시킴
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);

        // 만약 frequencyMap.get(num)이 undefined라면(즉, 아직 해당 숫자가 Map에 없는 경우), 대신 0을 반환
        // 반환된 0에 1을 더함
        // 즉 0일 경우 1증가
    }

    // 2. 최빈값 확인
    let isDuplicate = false; // 최빈값이 여러 개인지 확인하는 플래그
    for (const [num, frequency] of frequencyMap) {
        // 더 높은 빈도수를 찾은 경우
        if (frequency > maxFrequency) {
            maxFrequency = frequency; // 최대 빈도수 업데이트
            answer = num; // 최빈값 업데이트
            isDuplicate = false; // 중복 여부 초기화
        } else if (frequency === maxFrequency) {
            // 동일한 빈도수를 가진 다른 값이 있는 경우
            isDuplicate = true; // 중복 플래그 설정
        }
    }

    // 최빈값이 여러 개인 경우 -1 반환
    return isDuplicate ? -1 : answer;
}

/**
 * 다른 사람의 풀이를 본 결과
 * => 
 * 
    function solution(array) {
        let m = new Map();
        for (let n of array) m.set(n, (m.get(n) || 0)+1);
        m = [...m].sort((a,b)=>b[1]-a[1]);
        return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
    }

    ...djfuqekㅠ
 */

console.log(solution([1, 1, 2, 2, 3, 3, 3])); // 출력: 3
console.log(solution([1, 1, 2, 2]));          // 출력: -1
console.log(solution([1]));                   // 출력: 1
console.log(solution([1, 2, 3, 4, 5]));       // 출력: -1