// 홀짝 구분하기
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
output = "";

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    n = Number(input[0]);

    if(n % 2 == 0) {
        output += `${n} is even`;
    } else {
        output += `${n} is odd`;
    }

    console.log(output);
});