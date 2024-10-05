function solution(input) {
  const [str] = input;
  let sec = 0;
  const dial = ["ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"];

  if (str === "OPERATOR") {
    console.log(11);
    return;
  }

  [...str].forEach((char) => {
    for (let i = 0; i < dial.length; i++) {
      if (dial[i].includes(char)) {
        sec += i + 3;
      }
    }
  });

  console.log(sec);
}

const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

solution(input);