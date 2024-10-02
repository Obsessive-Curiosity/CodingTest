function solution(s) {
  return s
    .toLowerCase() // 전체 소문자 전환
    .split(" ") // 공백으로 분리하기
    .map((word) => {
      if (word.length > 0 && /[a-zA-Z]/.test(word[0])) {
        return word[0].toUpperCase() + word.slice(1);
      }
      return word;
    })
    .join(" ");
}