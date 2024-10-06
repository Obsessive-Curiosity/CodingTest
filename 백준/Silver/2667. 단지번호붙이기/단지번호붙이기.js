function solution(input) {
  const N = Number(input.shift()); // 가로세로 길이
  const maps = input.map((row) => row.split("").map(Number)); // 지도
  const complex = []; // 단지들의 가구수
  const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]; // 방향

  const isValidRange = (y, x) => {
    return 0 <= y && y < N && 0 <= x && x < N;
  };

  // 방문 처리 후 가구수 반환
  const BFS = (start) => {
    const queue = [start];
    const [sy, sx] = start;
    maps[sy][sx] = 0; // 시작 부분 방문처리
    let house = 1; // 가구수

    while (queue.length) {
      const [cy, cx] = queue.shift();

      for (const d of dir) {
        const [dy, dx] = d;
        const [ny, nx] = [cy + dy, cx + dx];

        if (isValidRange(ny, nx) && maps[ny][nx]) {
          queue.push([ny, nx]);
          maps[ny][nx] = 0; // 중복방지를 위해 미리 방문 처리
          house++;
        }
      }
    }

    return house;
  };

  // 지도에서 가구가 있는 경우 BFS 실행
  maps.forEach((row, i) => {
    row.forEach((val, j) => {
      if (val === 1) {
        complex.push(BFS([i, j]));
      }
    });
  });

  complex.sort((a, b) => a - b); // 가구수 오름차순으로 정렬
  complex.unshift(complex.length); // 맨앞에 단지수 추가
  complex.forEach((i) => console.log(i)); // 출력
}

const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);