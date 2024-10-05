const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "5622/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

input.forEach(i => console.log(i));