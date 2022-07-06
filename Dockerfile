FROM node:12

RUN mkdir -p /usr/project/anomaly_app

WORKDIR /usr/project/anomaly_app

COPY ./package*.json ./
COPY . .
RUN npm install && npm run build

CMD [ "npm", "start"]
