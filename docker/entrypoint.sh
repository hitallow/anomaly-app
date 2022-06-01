#!/bin/bash

cd /usr/project/anomaly_app

# Load local .env
if [ -f .env ]; then
  export $(cat .env | grep -v '#' | awk '/=/ {print $1}')
fi

echo $(date -u)

npm install

if [[ -n "$APP_ENV_MODE" && $APP_ENV_MODE == "production" ]]; then
  npm run build && npm run start:prod
else
  npm run start:dev
fi