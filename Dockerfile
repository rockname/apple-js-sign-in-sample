FROM node:12

RUN npm install -g @vue/cli

WORKDIR /app

EXPOSE 8080
