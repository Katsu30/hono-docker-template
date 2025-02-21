# ベースイメージを指定
FROM node:22-alpine

# 作業ディレクトリを設定
WORKDIR /src

# 依存関係をインストール
COPY package*.json ./

RUN npm install -g pnpm && pnpm install

# アプリケーションのソースコードをコピー
COPY . .

# アプリケーションを起動するコマンドを指定
CMD ["pnpm", "dev"]