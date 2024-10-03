const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `` // 기본 입력값 설정 (백준 코딩테스트에서 비워놔도 무방하다.)
).split("\n");

const input = (() => {  //input()을 호출할 때마다 한줄씩 읽어온다.
  let line = 0;
  return () => stdin[line++];
})(); 
const [total, win] = input().split(' ').map(value => Number(value));
const winningRate = Math.floor(win*100/total);
if(winningRate >= 99) {
    console.log(-1);
}else {
    const targetWinningRate = winningRate + 1;
    let result = (100 * win - (targetWinningRate*total)) / (targetWinningRate - 100);
    console.log(Math.ceil(result));
}