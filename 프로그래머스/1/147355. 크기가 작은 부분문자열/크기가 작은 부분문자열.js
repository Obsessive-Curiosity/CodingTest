function solution(t, p) {
  const tlen = t.length;
  const plen = p.length;
  let cnt = 0;

  for (let i = 0; i <= tlen - plen; i++) {
    if (+t.slice(i, i + plen) <= +p) cnt++;
  }

  return cnt;
}