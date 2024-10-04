const testCasefunc = (test) => {
  const [M, N, K] = test.dimensions; // 배추밭 정보(M:열개수, N:행개수, K:배추개수)
  const cabbageCoord = test.coordinates; // 배추 위치

  // N X M 2차원 배열(배추밭) 생성
  const field = Array.from({ length: N }, () => Array(M).fill(0));
  cabbageCoord.forEach((coord) => {
    const [x, y] = coord.split(" ").map(Number);
    field[y][x] = 1;
  });

  // 상하좌우 방향 설정
  const dist = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];

  let worm = 0;

  const BFS = (y, x) => {
    // 큐 생성
    const queue = [[y, x]];

    while (queue.length !== 0) {
      // cy : 행 현재 좌표
      // cx : 열 현재 좌표
      const [cy, cx] = queue.shift();

      // 현재 위치에 배추가 없으면 돌아가기
      // 배추가 있으면 방문 체크
      if (!field[cy][cx]) {
        continue;
      }
      field[cy][cx] = 0; // 방문 체크

      // 상하좌우 탐색
      // 배추 있으면 큐에 넣기
      dist.forEach((ds) => {
        const [dsy, dsx] = ds;
        const ny = cy + dsy; // 행 다음 좌표
        const nx = cx + dsx; // 열 다음 좌표

        if (0 <= ny && ny < N && 0 <= nx && nx < M && field[ny][nx] === 1)
          queue.push([ny, nx]);
      });
    }
  };

  // 모든 배추 위치 탐색
  field.forEach((row, i) => {
    row.forEach((cell, j) => {
      if (cell === 1) {
        // 배추가 있는 경우
        BFS(i, j); // BFS 실행
        worm++; // 벌레 수 증가
      }
    });
  });

  // 결과 출력
  console.log(worm);
};

function solution(input) {
  // 테스트 케이스 나누기
  const numberOfTestCase = Number(input.shift());
  const testCases = [];

  for (let i = 0; i < numberOfTestCase; i++) {
    const [M, N, K] = input.shift().split(" ").map(Number); // N, M, K 값을 가져옵니다.
    const coordinates = []; // 좌표를 저장할 배열

    // K번 shift하여 좌표 가져오기
    for (let j = 0; j < K; j++) {
      coordinates.push(input.shift()); // K번 shift하여 좌표를 추가
    }

    testCases.push({
      dimensions: [M, N, K],
      coordinates,
    });
  }

  // 테스트 케이스 별로 실행하기
  for (test of testCases) {
    testCasefunc(test);
  }
}

const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
