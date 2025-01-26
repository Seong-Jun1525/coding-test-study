// a와 b 출력하기
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let a, b;

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    a = Number(input[0]);
    b = Number(input[1]);
    
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
});