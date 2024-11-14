function isRight(queueLength, queueFirst, maxQueueLength, maxQueueFirst) {
  return (
    queueLength > maxQueueLength ||
    (queueLength === maxQueueLength && queueFirst < maxQueueFirst)
  );
}

function solution(input) {
  const n = Number(input.shift());
  const infos = input;
  const queue = [];
  let maxQueueLength = 0;
  let maxQueueFirst = Infinity;
  let maxQueueState = [];

  for (const info of infos) {
    const query = info.split(" ").map(Number);
    const type = query[0];

    if (type === 1) {
      queue.unshift(query[1]);
    }
    if (type === 2) {
      queue.pop();
    }

    if (isRight(queue.length, queue[0], maxQueueLength, maxQueueFirst)) {
      maxQueueLength = queue.length;
      maxQueueFirst = queue[0];
    }
  }

  console.log(maxQueueLength, maxQueueFirst);
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "241114.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);