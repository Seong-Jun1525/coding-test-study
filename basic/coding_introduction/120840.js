/** 구슬을 나누는 경우의 수
 * 문제 설명
 * 머쓱이는 구슬을 친구들에게 나누어주려고 합니다.
 * 
 * 구슬은 모두 다르게 생겼습니다.
 * 
 * 머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때
 *  balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.
 * 
 * balls! / (balls-share)! * share!
 */

function solution(balls, share) {
    let n = Fac(balls);
    let m = Fac(share);
    let mn = balls - share;

    return Math.round(n / (Fac(mn) * m));
}

function Fac(b) {
    if (b === 1 || b === 0) return 1;
    return b * Fac(b - 1)
}

console.log(solution(3, 2));
console.log(solution(5, 3));
console.log(solution(30, 29));
console.log(solution(30, 15));