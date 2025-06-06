
FROM node:22-slim

ENV TZ=Asia/Tokyo

WORKDIR /app

RUN apt-get update \
    && apt-get install -y

COPY package.json package-lock.json ./

RUN npm install

COPY . .

CMD ["npm","run","dev"]