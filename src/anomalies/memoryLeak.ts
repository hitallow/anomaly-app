import path from "path";
import { execSync } from "child_process";
import { factorialRecursive, makeRandomText } from "../helpers";

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

export interface MemoryAnomalyConfig {
  increaseMode: "fast" | "slow" | "instant";
  durationOfAlocation: number;
  targetAlocation: number;
  increaseRate: number;
}

const memoryUsage = async (params: MemoryAnomalyConfig) => {
  const FILE_PATH = path.join(__dirname, "../scripts/memory.c");
  const executableFile = "memory.out";
  const { targetAlocation, increaseMode, increaseRate, durationOfAlocation } =
    params;
  const command = `gcc ${FILE_PATH} -o ${executableFile} && ./${executableFile} ${targetAlocation} ${increaseMode} ${increaseRate} ${durationOfAlocation}`;

  try {
    const stdout = execSync(command);
    const result = stdout.toString();
  } catch (error) {}

  return 1;
};

export { memoryLeak, memoryUsage };
