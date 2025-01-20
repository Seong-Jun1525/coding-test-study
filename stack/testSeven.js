const n = 8;
const k = 2;
const cmd = ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z"];

console.log(solution(n, k, cmd));

function solution(n, k, cmd) {
    const deleted = []; // 삭제된 행 저장

    // 각 행을 기준으로 위 아래의 행 인덱스 값을 저장할 벡터
    // 행은 맨 처음 혹은 마지막에 삽입될 수 있으므로 가상공간을 포함하여 생성
    const up = [...new Array(n + 2)].map((_, i) => i - 1);
    const down = [...new Array(n + 1)].map((_, i) => i + 1);

    k += 1; // 현재 위치에 1을 더하는 이유는 가상공간이 있기 때문

    for (const item of cmd) {
        if (item[0] === "C") {
            deleted.push(k);
            up[down[k]] = up[k];
            down[up[k]] = down[k];
            k = n < down[k] ? up[k] : down[k];
        }
        else if (item[0] === "Z") {
            const restore = deleted.pop();
            down[up[restore]] = restore;
            up[down[restore]] = restore;
        }
        else {
            const [action, num] = item.split(" ");
            if (action === "U") {
                for (let i = 0; i < num; i++) {
                    k = up[k];
                }
            }
            else {
                for (let i = 0; i < num; i++) {
                    k = down[k];
                }
            }
        }
    }

    const answer = new Array(n).fill("O");
    for (const i of deleted) {
        answer[i - 1] = "X";
    }

    return answer.join("");
}