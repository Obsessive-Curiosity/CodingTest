function check(N, timeTable, workSchedule) {
  const scheduleTable = {};
  let [totalMin, totalMax] = [24 * 7 * N, 0];

  // scheduleTabl 입력
  workSchedule.forEach((work, idx) => {
    const time = timeTable[idx % 4];

    for (const worker of work) {
      if (scheduleTable[worker]) scheduleTable[worker] += time;
      else scheduleTable[worker] = time;
    }
  });

  for (const worker in scheduleTable) {
    if (worker === "-") continue;

    const totalTime = scheduleTable[worker];

    if (totalTime < totalMin) totalMin = totalTime;
    if (totalTime > totalMax) totalMax = totalTime;
  }

  return totalMax - totalMin > 12 ? "No" : "Yes";
}

function solution(input) {
  const N = Number(input.shift());
  const timeTable = [4, 6, 4, 10];
  const workSchedule = input.map((itme) => itme.split(" "));
  const result = check(N, timeTable, workSchedule);

  console.log(result);
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "241104.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
