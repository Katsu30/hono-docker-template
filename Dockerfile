# ベースイメージを指定
FROM node:22-alpine

WORKDIR /src

COPY package*.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install

COPY . .