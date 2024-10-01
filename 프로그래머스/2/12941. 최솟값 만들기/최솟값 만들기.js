function solution(A, B) {
  A.sort((a, b) => b - a); // 내림차순 100->1
  B.sort((a, b) => a - b); // 오름차순 1->100

  const sum = A.reduce((acc, a, idx) => acc + a * B[idx], 0);
  return sum;
}
