// 문자 갯수 세기
function countChar(str, char) {
  return [...str].reduce((count, c) => (c === char ? count + 1 : count), 0);
}

function solution(X, Y) {
  // 길이가 짧은 문자열 Set 만들기
  const set = X.length > Y.length ? new Set([...Y]) : new Set([...X]);

  // 최소 갯수 구하기
  const arr = [...set].reduce((acc, cur) => {
    const cntX = countChar(X, cur);
    const cntY = countChar(Y, cur);
    const minCnt = Math.min(cntX, cntY);

    if (minCnt > 0) acc.push([cur, minCnt]);

    return acc;
  }, []);

  // 내림차순으로 sort
  arr.sort((a, b) => b[0] - a[0]);

  // repeat로 "00"->"0" 필터링
  const ret = arr.reduce((acc, cur, idx) => {
    if (idx === 0 && cur[0] === "0" && cur[1] > 1) {
      acc += cur[0].repeat(1);
    } else {
      acc += cur[0].repeat(cur[1]);
    }
    return acc;
  }, "");

  // 결과 반환
  return ret === "" ? "-1" : ret;
}