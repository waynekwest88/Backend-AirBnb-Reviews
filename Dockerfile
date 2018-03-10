FROM node:latest

RUN mkdir -p /app

WORKDIR /app

ADD . /app

RUN npm install global nodemon

RUN npm install

EXPOSE 3004

CMD [ "npm", "start" ]