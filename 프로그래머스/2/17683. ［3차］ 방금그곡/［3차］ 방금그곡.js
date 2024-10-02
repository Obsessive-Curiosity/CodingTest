const getTimeDiff = (startTime, endTime) => {
  const start = new Date(`1970-01-01T${startTime}:00`);
  const end = new Date(`1970-01-01T${endTime}:00`);

  const diff = end - start;
  const minutes = Math.floor(diff / (60 * 1000));

  return minutes;
};

const isInScores = (splitm, splits, playingTime) => {
  const { origin, target } = { origin: splits, target: splitm };


  const repeatedOrigin = Array.from(
    { length: playingTime },
    (_, i) => origin[i % origin.length]
  );

  const startIdx = repeatedOrigin.reduce((arr, item, idx) => {
    if (item === target[0]) {
      arr.push(idx);
    }
    return arr;
  }, []);

  const found = startIdx.some((idx) => {
    return (
      repeatedOrigin.slice(idx, idx + target.length).join("") ===
      target.join("")
    );
  });

  return found;
};

function solution(m, musicinfos) {
  const titles = [];

  musicinfos.forEach((infos) => {
    const [startTime, endTime, title, scores] = infos.split(",");
    const playingTime = getTimeDiff(startTime, endTime);
    const splitm = m.match(/[A-G]#?|[A-G]/g);
    const splits = scores.match(/[A-G]#?|[A-G]/g);

    if (
      isInScores(splitm, splits, playingTime) &&
      splitm.length <= playingTime
    ) titles.push([playingTime, title]);
    
  });

  titles.sort((a, b) => b[0] - a[0]);

  return titles.length < 1 ? "(None)" : titles[0][1];
}