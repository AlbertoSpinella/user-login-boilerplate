FROM node:18.5-alpine3.15
WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
RUN npm ci
RUN npm install -g nodemon
COPY . /app
CMD node server.js
EXPOSE 3000