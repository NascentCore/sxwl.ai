#!/bin/bash

job_name="nascentcore_ai"

echo "Build ${job_name}"

yarn install
yarn build

# Restart the mainsite's nodejs server
pm2 stop ${job_name}
pm2 delete ${job_name}
pm2 start yarn --name=${job_name} start --port=3001
