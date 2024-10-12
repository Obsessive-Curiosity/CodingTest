function BFS(family, start, end, n) {
  const visited = Array(n + 1).fill(false);
  const queue = [[start, 0]];

  while (queue.length) {
    const [node, kinship] = queue.shift();

    if (node === end) {
      return kinship;
    }

    if (!visited[node]) {
      visited[node] = true;
      for (const neighbor of family[node]) {
        queue.push([neighbor, kinship + 1]);
      }
    }
  }

  return -1;
}

function solution(input) {
  const n = Number(input.shift());
  const [start, end] = input.shift().split(" ").map(Number);

  const m = Number(input.shift());
  const tree = input.map((row) => row.split(" ").map(Number));
  const family = Object.fromEntries(
    Array.from({ length: n }, (_, i) => [i + 1, []])
  );

  for (const relation of tree) {
    const [from, to] = relation;
    family[from].push(to);
    family[to].push(from);
  }

  result = BFS(family, start, end, n);
  console.log(result);
}

const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);