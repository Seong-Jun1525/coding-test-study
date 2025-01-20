const arr = [[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(arr, moves));

function solution(arr, moves) {
    const lanes = [...Array(arr[0].length)].map(() => []);

    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 0; j < arr[0].length; j++) {
            if (arr[i][j]) {
                lanes[j].push(arr[i][j]);
            }
        }
    }

    const stack = [];

    let answer = 0;

    for (const m of moves) {
        if (lanes[m - 1].length > 0) {
            // 해당 열에 인형이 있는 경우
            const doll = lanes[m - 1].pop();

            if (stack.length > 0 && stack[stack.length - 1] === doll) {
                // 바구니에 인형이 있고 가장 위에 있는 인형과 같은 경우
                stack.pop();
                answer += 2;
            }
            else {
                stack.push(doll);
            }
        }
    }

    return answer;
}