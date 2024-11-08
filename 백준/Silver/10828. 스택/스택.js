function solution(input) {
  const commands = input.slice(1).map((command) => command.split(" "));
  const stack = [];
  const results = [];

  for (const command of commands) {
    const exe = command[0];
    switch (exe) {
      case "push":
        const X = command[1];
        stack.push(X);
        break;
      case "pop":
        results.push(stack.pop() ?? -1);
        break;
      case "size":
        results.push(stack.length);
        break;
      case "empty":
        results.push(stack.length > 0 ? 0 : 1);
        break;
      case "top":
        results.push(stack.slice(-1)[0] ?? -1);
        break;
      default:
        break;
    }
  }

  console.log(results.join("\n"));
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "241108.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);