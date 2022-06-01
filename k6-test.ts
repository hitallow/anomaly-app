import http from "k6/http";
import { sleep } from "k6";

// levantar latencia e chamadas por segundos

export const options = {
  scenarios: {
    normal: {
      executor: "constant-arrival-rate",
      duration: "30s",
      exec: "normal",
      preAllocatedVUs: 200,
      // maxVUs: 400,
      timeUnit: "1s",
      rate: 500
    },
    anomaly: {
      executor: "constant-arrival-rate",
      duration: "10s",
      exec: "anomaly",
      rate: 1,
      timeUnit: "20s",
      preAllocatedVUs: 1,
      maxVUs: 1,
      // inicia a anomalia a partir do 20s quando o primeiro finaliza
      startTime: "31s"
    },
    normal2: {
      executor: "constant-arrival-rate",
      duration: "20s",
      exec: "normal",
      preAllocatedVUs: 100,
      // maxVUs: 200,
      timeUnit: "1s",
      rate: 500,
      // iniciando com o delay dos outros
      startTime: "52s"
    }
  }
};

const BASE_URL = "http://localhost:5000";
const SLEEP_DURATION = 0.1;

export function anomaly() {
  http.post(`${BASE_URL}/cpu-usage`, {
    number: 10
  });
  sleep(SLEEP_DURATION);
}

export function normal() {
  http.get(`${BASE_URL}/fibonacci/1444`);
  sleep(SLEEP_DURATION);
}
