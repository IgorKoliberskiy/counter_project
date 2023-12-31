FROM node:20.5

WORKDIR /app
COPY ./package*.json ./
RUN npm install
COPY ./src src/

CMD ["npm", "run", "start"]