import { makeRandomText } from "../helpers";

export const generateText = (nth: number): string => {
  const text = [];
  for (let i = 0; i < nth; i++) {
    text.push(makeRandomText(101));
  }

  return text.join(" ");
};
