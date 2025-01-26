// 문자열 반복해서 출력하기
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let output = "";

rl.on("line", function(line) {
    input = line.split(" ");
}).on("close", function() {
    str = input[0];
    n = Number(input[1]);

    for(let i = 0; i < n; i++) {
        output += str;
    }

    console.log(output);
});