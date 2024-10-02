const getTimeDiff = (startTime, endTime) => {
  const start = new Date(`1970-01-01T${startTime}:00`);
  const end = new Date(`1970-01-01T${endTime}:00`);

  const diff = end - start; // 밀리초 단위로 계산
  const minutes = Math.floor(diff / (60 * 1000)); // 분으로 변환

  return minutes;
};

const isInScores = (splitm, splits, playingTime) => {
  // score가 늘 더 길음 왜냐면 재생시간만큼 스코어를 늘리고
  // m이 재생시간보다 짧으면 (None) 반환하므로
  const repeatedScores = Array.from(
    { length: playingTime },
    (_, i) => splits[i % splits.length]
  );

  const startIdx = repeatedScores.reduce((arr, item, idx) => {
    if (item === splitm[0]) {
      arr.push(idx);
    }
    return arr;
  }, []);

  const found = startIdx.some((idx) => {
    return (
      repeatedScores.slice(idx, idx + splitm.length).join("") ===
      splitm.join("")
    );
  });

  return found;
};

function solution(m, musicinfos) {
  const titles = [];

  musicinfos.forEach((infos) => {
    const [startTime, endTime, title, scores] = infos.split(",");
    const playingTime = getTimeDiff(startTime, endTime);
    const splitm = m.match(/[A-G]#?/g);
    const splits = scores.match(/[A-G]#?/g);

    if (
      isInScores(splitm, splits, playingTime) &&
      splitm.length <= playingTime
    ) {
      // m이 scores안에 있rh, 재생시간이 음표보다 짧지 않으면 title에 추가
      // "ABC#D", ["04:00,04:03,NAME,ABC#D"] => (None)
      titles.push([playingTime, title]);
    }
  });

  // playingTime순으로 정렬하기
  titles.sort((a, b) => b[0] - a[0]);

  // 조건이 일치하는 음악이 없을 때에는 “(None)”을 반환
  return titles.length < 1 ? "(None)" : titles[0][1];
}