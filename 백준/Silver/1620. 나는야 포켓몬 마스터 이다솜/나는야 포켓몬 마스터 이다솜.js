function isNumber(string) {
  return !isNaN(string);
}

function solution(input) {
  const [N, M] = input.shift().split(" ").map(Number);
  const [pokemons, questions] = [input.slice(0, N), input.slice(N)];
  const [pokemonHash, indexHash] = [{}, {}];
  const result = [];

  pokemons.forEach((pokemon, index) => {
    pokemonHash[pokemon] = index + 1;
    indexHash[index + 1] = pokemon;
  });

  for (const question of questions) {
    if (isNumber(question)) result.push(indexHash[question]);
    else result.push(pokemonHash[question]);
  }

  console.log(result.join("\n"));
}

const fs = require("fs");
const filePath = "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);