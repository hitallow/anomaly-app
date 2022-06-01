import { factorialRecursive, makeRandomText, fibonnaci } from "@src/helpers";

const memoryLeak = (size: number, times: number = 1): number => {
  const length = factorialRecursive(size);

  console.log(`Gerando array de ${length} possições com ${times} vezes`);

  const memory = new Array(length);
  for (let index = 0; index < times; index++) {
    memory[index] = new Array(length);
    for (let aux = 0; aux < length; aux++) {
      memory[index][aux] = {
        word: makeRandomText(size)
      };
    }
  }
  return length;
};

export { memoryLeak };
