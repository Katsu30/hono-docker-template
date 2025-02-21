# ベースイメージを指定
FROM node:22-alpine

WORKDIR /src

COPY package*.json ./
# pnpmをインストールし、依存関係をインストール
RUN npm install -g pnpm && pnpm install

# アプリケーションのソースコードをコピー
COPY . .

# アプリケーションを起動するコマンドを指定
CMD ["pnpm", "dev"]