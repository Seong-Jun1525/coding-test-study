const str = "baabaa";

function solution(str) {
    const stack = [];

    for (const s of str) {
        if (stack.length > 0 && stack[stack.length - 1] === s) {
            stack.pop();
        }
        else {
            stack.push(s);
        }
    }

    return stack.length === 0 ? 1 : 0;
}

console.log(solution(str));