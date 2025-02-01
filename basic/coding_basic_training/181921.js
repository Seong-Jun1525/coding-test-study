/** 배열만들기2
 * 문제 설명
 * 정수 l과 r이 주어졌을 때, 
 * 
 * l 이상 r이하의 정수 중에서 숫자 "0"과 "5"로만 이루어진 모든 정수를
 * 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.
 * 
 * 만약 그러한 정수가 없다면, -1이 담긴 배열을 return 합니다.
 */

function solution(l, r) {
    var answer = [];
    let check = true;

    for(let i = l; i <= r; i++) {
        let strNum = i + "";
        // console.log(strNum);
        for(let j = 0; j < strNum.length; j++) {
            // console.log(strNum[j]);
            if(strNum[j] !== "0" && strNum[j] !== "5") {
                check = false;
                break;
            }
        }

        if(check) answer.push(i);
        else check = true;
    }

    if(answer.length === 0) answer.push(-1);

    return answer;
}

// strNum[i]가 아니고 그냥 i를 answer에 push해야하는데 잘못봐서 시간잡았네..

console.log(solution(5, 555));
console.log(solution(10, 20));