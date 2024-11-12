function shake(cards) {
  const result = [];

  while (true) {
    result.push(cards.pop()); // 제일 위에 있는 카드를 바닥에 버린다.
    if (cards.length < 1) break;
    cards.unshift(cards.pop()); // 제일 위에 있는 카드를 제일 아래에 있는 카드 밑으로 옮긴다.
  }

  return result.join(" ");
}

function solution(input) {
  const N = Number(input);
  const cards = Array.from({ length: N }, (_, i) => N - i);
  const result = shake(cards);

  console.log(result);
}

const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);