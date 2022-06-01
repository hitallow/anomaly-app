const factorialRecursive = (n: number): number => {
  if (n === 0) {
    return 1;
  }
  return n * factorialRecursive(n - 1);
};

const factorialInteractive = (num: number): number => {
  let result = num;

  if (num === 0 || num === 1) return 1;

  while (num > 1) {
    num--;
    result = result * num;
  }

  return result;
};

export { factorialRecursive, factorialInteractive };
