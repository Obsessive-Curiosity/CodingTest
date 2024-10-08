function solution(input) {
  const [left, right] = input.split(" ");
  const [lenLeft, lenRight] = [left.length, right.length];
  let limit = 1; // 서로 길이 같을 때, 이동수
  let [target, move] = [left, right]; // 서로 길이 같을 때, move가 이동
  let mincnt = lenLeft; // 서로 길이 같을 때, A와 B의 차이 최소

  if (lenLeft < lenRight) {
    limit = lenRight - lenLeft + 1;
    mincnt = lenLeft;
    [target, move] = [right, left];
  }
  if (lenLeft > lenRight) {
    limit = lenLeft - lenRight + 1;
    mincnt = lenRight;
    [move, target] = [left, right];
  }

  // 이동수 만큼 비교하기
  for (i = 0; i < limit; i++) {
    let cnt = 0;

    // 개수증가
    for (j = 0; j < move.length; j++) {
      if (move[j] !== target[i + j]) cnt++;
    }

    // 더 작으면 추가
    if (cnt < mincnt) mincnt = cnt;
  }

  // 출력
  console.log(mincnt);
}

const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim();

solution(input);