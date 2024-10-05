function solution(maps) {
  const leny = maps.length;
  const lenx = maps[0].length;
  const [goaly, goalx] = [leny - 1, lenx - 1];
  const dist = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];

  const queue = [[0, 0, 1]];

  while (queue.length) {
    const [cy, cx, move] = queue.shift();

    if (cy === goaly && cx === goalx) {
      return move;
    }

    // 처음이 0인 경우 무시
    if (!maps[cy][cx]) {
      continue;
    }
    maps[cy][cx] = 0; //방문처리

    for (ds of dist) {
      const [dsy, dsx] = ds;
      const ny = cy + dsy;
      const nx = cx + dsx;

      if (0 <= ny && ny < leny && 0 <= nx && nx < lenx && maps[ny][nx]) {
        queue.push([ny, nx, move + 1]);
      }
    }
  }

  return -1;
}