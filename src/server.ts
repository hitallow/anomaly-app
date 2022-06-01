import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { cpuUsage, memoryLeak, diskWriting } from "@src/anomalies";
import { fibonnaci } from "./helpers";

dotenv.config();

const app: Express = express();
const port = 80;

app.use(
  express.urlencoded({
    extended: true
  })
);

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "App is running!"
  });
});

app.post("/cpu-usage", async (req: Request, res: Response) => {
  const number = req.body.number;

  await cpuUsage(number);

  res.statusCode = 200;

  return res.send({
    message: "executando estresse de CPU"
  });
});

app.post("/memory-usage", (req: Request, res: Response) => {
  console.log("Iniciando estresse de memoria");
  const number = req.body.number;
  const times = req.body.times || 1;

  if (number > 170) {
    return res.status(400).send({
      message: "Numero incalculavel, tende ao infinito"
    });
  }

  const result = memoryLeak(number, times);

  res.statusCode = 200;

  return res.send({
    result: `fatorial de ${req.body.number} é ${result}`
  });
});

app.post("/disk-input", (req: Request, res: Response) => {
  // usar FIO com apt-get
  const number = req.body.number;
  const times = req.body.times || 1;
  diskWriting(number, times);
  return (res.send({
    message: "aumentando escrita em disco"
  }).statusCode = 200);
});

app.get("/fibonnaci/:nth", (req: Request, res: Response) => {
  const nth = parseInt(req.params.nth as string) || 0;
  const result = fibonnaci(nth);
  return res.send({
    result: `fibonnaci de ${nth} é ${result}`
  });
});

app.listen(port, () => {
  console.log(`⚡️[Server]: Server is running at https://localhost:${port}`);
});
