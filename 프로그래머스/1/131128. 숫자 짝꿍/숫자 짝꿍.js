function countChar(str, char) {
  return [...str].reduce((count, c) => (c === char ? count + 1 : count), 0);
}

function solution(X, Y) {
  const xSet = new Set([...X]);

  const arr = [...xSet].reduce((acc, cur) => {
    const cntX = countChar(X, cur);
    const cntY = countChar(Y, cur);
    const minCnt = Math.min(cntX, cntY);
    if (minCnt > 0) acc.push([cur, minCnt]);

    return acc;
  }, []);

  arr.sort((a, b) => b[0] - a[0]);

  const ret = arr.reduce((acc, cur, idx) => {
    if (idx === 0 && cur[0] === "0" && cur[1] > 1) {
      acc += cur[0].repeat(1);
    } else {
      acc += cur[0].repeat(cur[1]);
    }
    return acc;
  }, "");

  return ret === "" ? "-1" : `${ret}`;
}