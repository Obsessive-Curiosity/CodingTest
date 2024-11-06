function solution(nums) {
  const setNums = Array.from(new Set(nums));
  const A = Math.ceil(setNums.length);
  const B = Math.floor(nums.length / 2);

  return Math.min(A, B);
}