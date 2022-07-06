import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import {
  cpuUsage,
  diskWriting,
  memoryUsage,
  generateRandomData
} from "./anomalies";
import { factorialInteractive, fibonacci } from "./helpers";

dotenv.config();

const app: Express = express();
const port = 80;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get("/", (_req: Request, res: Response) =>
  res.send({ message: "App is running!" })
);

app.post("/cpu-usage", async (req: Request, res: Response) => {
  const { duration } = req.body;
  if (!duration) {
    return res.status(400).send({ message: "Duration is required" });
  }

  await cpuUsage(duration);

  res.statusCode = 200;

  return res.send({ message: "executando estresse de CPU" });
});

app.post("/disk-input", (req: Request, res: Response) => {
  // usar FIO com apt-get
  const number = req.body.number;
  const times = req.body.times || 1;
  diskWriting(number, times);
  res.statusCode = 200;
  return res.send({ message: "aumentando escrita em disco" });
});

app.get("/fibonacci/:nth", (req: Request, res: Response) => {
  const nth = parseInt(req.params.nth as string) || 0;
  const result = fibonacci(nth);
  const resultMessage = `fibonacci de ${nth} é ${result}`;
  console.log(resultMessage);
  return res.send({ result: resultMessage });
});

app.get("/factorial/:nth", (req: Request, res: Response) => {
  const nth = parseInt(req.params.nth as string) || 0;
  const result = factorialInteractive(nth);
  return res.send({ result: `factorial de ${nth} é ${result}` });
});

app.get("/lorem-ipsum/:nth", (req: Request, res: Response) => {
  const size = (parseInt(req.params.nth as string) || 1) * 1000;
  const text = generateRandomData(size);
  return res.send(text);
});

app.post("/receive-data", (req: Request, res: Response) => {
  const data = req.body;
  console.log("data recebido com sucesso");
  return res.send({ message: "data recebida com sucesso" });
});

app.post("/memory-usage", (req: Request, res: Response) => {
  const { body } = req;
  if (!!!body) {
    return res.status(400).send({
      message: "Required fields are not sent"
    });
  }
  memoryUsage({ ...body });
  return res.send({ message: "aumentando uso de memoria" });
});

app.listen(port, () => {
  console.log(`⚡️[Server]: Server is running at "https://localhost:${port}"`);
});
