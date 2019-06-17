FROM node:12

RUN npm install -g @vue/cli

WORKDIR /app

RUN npm install

EXPOSE 8080
