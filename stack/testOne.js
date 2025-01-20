const parenthesesStr = '((())()';

function solution(parenthesesStr) {
    const parenthesesStack = [];

    const parenthesesArr = parenthesesStr.split('');

    for (let parenthesesArrItem of parenthesesArr) {
        // console.log("parenthesesArrItem : " + parenthesesArrItem);
        if (parenthesesArrItem === "(") {
            parenthesesStack.push(parenthesesArrItem);
        }
        else if (parenthesesArrItem === ")") {
            if (parenthesesStack.length === 0) {
                return false;
            }
            else {
                parenthesesStack.pop();
            }
        }
    }
    // console.log("parenthesesStack : " + parenthesesStack);
    return parenthesesStack.length === 0;
}

console.log(solution(parenthesesStr));