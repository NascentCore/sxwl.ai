#!/bin/bash

echo "Build tricorder.dev"
yarn install
yarn run build

# Restart the mainsite's nodejs server
job_name="tricorder_dev_site"
pm2 stop ${job_name}
pm2 delete ${job_name}
pm2 start yarn --name ${job_name} -- run start
