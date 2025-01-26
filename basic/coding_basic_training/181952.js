// 문자열 출력하기
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
output = "";

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];

    output += str;

    console.log(output);
});