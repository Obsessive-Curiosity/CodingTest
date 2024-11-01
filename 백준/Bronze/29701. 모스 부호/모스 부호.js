// 29701 모스부호

function decoding(morse) {
  const morseCode = {
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
    ".----": 1,
    "..---": 2,
    "...--": 3,
    "....-": 4,
    ".....": 5,
    "-....": 6,
    "--...": 7,
    "---..": 8,
    "----.": 9,
    "-----": 0,
    "--..--": ",",
    ".-.-.-": ".",
    "..--..": "?",
    "---...": ":",
    "-....-": "-",
    ".--.-.": "@",
  };

  return morse.map((code) => morseCode[code]).join("");
}

function solution(input) {
  const [N, ...morse] = input.split(/\s/);
  const result = decoding(morse);
  console.log(result);
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "241101.txt";
const input = fs.readFileSync(filePath).toString().trim();

solution(input);