function solution(s) {
  const dict = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  // 문자를 숫자로 변환
  for (const key in dict) {
    s = s.replaceAll(key, dict[key]);
  }

  return Number(s);
}