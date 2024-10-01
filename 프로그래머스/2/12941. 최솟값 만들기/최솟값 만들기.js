function solution(A, B) {
  const { hasMaxArr, Arr } =
    Math.max(...A) > Math.max(...B)
      ? { hasMaxArr: A, Arr: B }
      : { hasMaxArr: B, Arr: A };

  hasMaxArr.sort((a, b) => b - a); // 내림차순 100->1
  Arr.sort((a, b) => a - b); // 오름차순 1->100

  // 최소합을 구하기 위해 최댓값이랑 최솟값이랑 곱하기
  const sum = hasMaxArr.reduce((acc, item, idx) => {
    return acc + item * Arr[idx];
  }, 0);
  return sum;
}
