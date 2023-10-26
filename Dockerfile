FROM node:20.5

WORKDIR /app

ARG NODE_ENV=production 
COPY ./package*.json .
RUN npm install
COPY ./src src/

CMD ["npm", "start"]