const value = 12345;

function solution(value) {
    const stack = [];
    while (1) {
        stack.push(parseInt(value % 2));
        if (value >= 2) {
            value /= 2;
        }
        else {
            return stack.reverse();
        }
    }
}

console.log(solution(value));