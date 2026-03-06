FROM node:22

WORKDIR /app

COPY .agents ./.agents

COPY package*.json ./

RUN npm install

COPY src/ ./src/

EXPOSE 3000

CMD ["node", "--no-warnings", "--experimental-transform-types", "src/app.ts"]
