const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "7576/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const isAllRipe = (field) => {
  return field.every(row => row.every(v => v !== 0));
};

function solution(input) {
  const [lenx, leny] = input.shift().split(" ").map(Number);
  const field = input.map(row => row.split(" ").map(Number));
  const ripeTomato = []; // 익은 토마토 위치 저장
  let finalDay = 0;

  // 모든 토마토가 익어있는 상태이면 0을 출력
  if (isAllRipe(field)) {
    console.log(0);
    return;
  }

  // 익은 토마토 위치 찾기
  field.forEach((row, i) => {
    row.forEach((val, j) => {
      if (val === 1) {
        ripeTomato.push([i, j]); // 익은 토마토의 좌표 저장
      }
    });
  });

  // BFS로 익어가는 토마토 설정
  const queue = ripeTomato; // 익은 토마토로 시작하는 queue
  const dist = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];

  // BFS 진행
  while (queue.length > 0) {
    const nextQueue = []; // 다음 날의 익은 토마토 위치를 저장할 배열

    for (const [cy, cx] of queue) {
      // 위치 탐색
      dist.forEach(([dsy, dsx]) => {
        const ny = cy + dsy;
        const nx = cx + dsx;

        if (
          ny >= 0 &&
          ny < leny &&
          nx >= 0 &&
          nx < lenx &&
          field[ny][nx] === 0 // 아직 익지 않은 토마토
        ) {
          field[ny][nx] = 1; // 익음 처리
          nextQueue.push([ny, nx]); // 익은 토마토 위치 추가
        }
      });
    }

    // 다음 날의 익은 토마토로 업데이트
    queue.length = 0; // 현재 큐 비우기
    queue.push(...nextQueue); // 다음 날 익은 토마토로 업데이트
    if (nextQueue.length > 0) finalDay++; // 만약 다음 날의 익은 토마토가 있다면 하루 추가
  }

  // 모든 토마토가 익지는 못하는 상황이면 -1을 출력
  console.log(isAllRipe(field) ? finalDay : -1);
}

solution(input);
