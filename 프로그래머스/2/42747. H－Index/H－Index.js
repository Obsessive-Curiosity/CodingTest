function solution(citations) {
  citations.sort((a, b) => b - a);
  let h_index = citations[0] ? citations.length : 0;

  citations.forEach((citation, index) => {
    const [current, next] = [citation, citations[index + 1]];
    const value = index + 1;
    if (current >= value && next <= value) {
      h_index = value;
    }
  });

  return h_index;
}