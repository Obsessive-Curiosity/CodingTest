// 할리갈리
function ringBell(cards) {
  for (const fruit in cards) {
    if (cards[fruit] === 5) return "YES";
  }
  return "NO";
}

function solution(input) {
  const N = input.shift();
  const array = input.map((str) => str.split(" "));
  const cards = {};

  // card 정리
  for (const arr of array) {
    const [fruit, number] = arr;

    if (cards[fruit]) {
      cards[fruit] += Number(number);
    } else {
      cards[fruit] = Number(number);
    }
  }

  // 결과값 출력
  console.log(ringBell(cards));
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "241102.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
