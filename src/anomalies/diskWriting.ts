import { readFileSync, writeFileSync, openSync, writeSync } from "fs";
import path from "path";
// const path = `${__dirname}/../../data/text.txt`;
const FILE_PATH = path.join(__dirname, "../../data/text.txt");
// const path = `/usr/project/anomaly_app/data/text.txt`;

const diskWriting = (size: number, times: number) => {
  // const length = factorialInteractive(size);
  const length = 200;
  const fd = openSync(`../data/file.txt`, "w");
  setInterval(() => writeSync(fd, new Array(1024).join(".")), 100);

  // for (let index = 0; index < length; index++) {
  //   const rawData = readFileSync(FILE_PATH);
  //   const content = rawData.toString();
  //   const word = makeRandomText(size);
  //   writeFileSync(FILE_PATH, `${content} ${word}\n`);
  // }
};

export { diskWriting };
