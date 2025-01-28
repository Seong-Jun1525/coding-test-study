// 주사위 게임 3
function solution(a, b, c, d) {
    var answer = 0;

    let arr = [a, b, c, d];
    
    // 1. 모든 주사위 숫자가 같은 경우
    if (arr.every(e => e === a)) return 1111 * a;
    /** MDN에서 every 메서드 참고하여 공부
     * Array 인스턴스의 every() 메서드는 배열의 모든 요소가 제공된 함수로
     * 구현된 테스트를 통과하는지 테스트합니다.
     * 
     * 이 메서드는 불리언 값을 반환합니다.
     */

    // 2. 모든 숫자가 다른 경우
    if (new Set(arr).size === arr.length) return Math.min(...arr);
    /** 
     * Set을 사용하여 중복값 없는 arr를 생성하고 그것의 길이를 size를 통하여 구함
     * 
     * 구했을 때 size가 기존 arr의 길이와 같을 시 전부 다른 값이므로 최솟값 반환
     */

    // 3. 2개씩 같은 경우
    if ([...new Set(arr)].length === 2) {
        const [p, q] = [...new Set(arr)];
        const countP = arr.filter(e => e === p).length;
        const countQ = arr.filter(e => e === q).length;
        /** MDN에서 filter 메서드 참고하여 공부
         * Array 인스턴스의 filter() 메서드는 주어진 배열의 일부에 대한 얕은 복사본을 생성하고,
         * 주어진 배열에서 제공된 함수에 의해 구현된 테스트를 통과한 요소로만 필터링 합니다.
         */
        
        if (countP === 2 && countQ === 2) {
            return (p + q) * Math.abs(p - q);
        }
    }

    // 4. 하나만 다른 경우
    const count = {};
    arr.forEach(num => count[num] = (count[num] || 0) + 1);
    const keys = Object.keys(count).map(Number); // 등장한 숫자들
    const values = Object.values(count);        // 각 숫자의 등장 횟수

    if (values.includes(3)) { // 3번 등장하는 숫자가 있을 경우
        const p = keys[values.indexOf(3)];       // 3번 등장한 숫자
        const q = keys[values.indexOf(1)];       // 1번 등장한 숫자
        return (10 * p + q) ** 2;
    }

    // 5. 2개 같고 2개가 서로 다른 경우
    if (values.includes(2) && values.includes(1)) {
        const q = keys[values.indexOf(1)];       // 첫 번째 1번 등장한 숫자
        const r = keys[values.lastIndexOf(1)];   // 두 번째 1번 등장한 숫자
        return q * r;
    }

    /** MDN에서 includes 메서드 참고하여 공부
     * Array 인스턴스의 includes() 메서드는 배열의 항목에 특정 값이 포함되어 있는지를 판단하여
     * 적절히 true 또는 false를 반환합니다.
     */

    return answer;
}

// 테스트 케이스
console.log("전부 같은 경우 => " + solution(2, 2, 2, 2));                   // 2222
console.log("하나만 다른 경우 => " + solution(4, 1, 4, 4));                 // 1681
console.log("2개 씩 같은 경우 => " + solution(6, 3, 3, 6));                 // 27
console.log("2개 같고 2개가 서로 다른 경우 => " + solution(2, 5, 2, 6));     // 30
console.log("전부 다른 경우 => " + solution(6, 4, 2, 5));                   // 2
