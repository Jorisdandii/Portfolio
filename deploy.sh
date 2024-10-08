#!/bin/bash

# PRODUCTION
git reset --hard
git pull origin master

npm i yarn -g
yarn global add serve
yarn
yarn run build
pm2 start "yarn run start:prod" --name=PORTFOLIO-REACT

# DEVELOPMENT
# npm i yarn -g
# yarn
# pm2 start "yarn run start" --name=PORTFOLIO-REACT