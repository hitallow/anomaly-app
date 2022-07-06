export function generateRandomData(size: number) {
  const chars = "abcdefghijklmnopqrstuvwxyz".split("");
  const len = chars.length;
  const random_data = [];

  while (size--) {
    random_data.push(chars[(Math.random() * len) | 0]);
  }

  return random_data.join("");
}
