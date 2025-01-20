const N = 5;
const K = 3;

console.log(solution(N, K));

function solution(n, k) {
    const queue = [];
    for (let i = 1; i <= n; i++) {
        queue.push(i);
    }

    while (1) {
        for (let i = 0; i < k; i++) {
            queue.push(queue.shift());
        }
        queue.pop();

        if (queue.length === 1) {
            break;
        }
    }

    return queue.pop();
}