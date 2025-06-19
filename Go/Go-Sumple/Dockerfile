FROM golang:1.24-alpine

# Air（ホットリロードツール）をインストール
RUN go install github.com/air-verse/air@latest

WORKDIR /app

# COPY go.mod go.sum ./
COPY go.mod ./
RUN go mod download

COPY . .

EXPOSE 8080

# 開発時はAirでホットリロード
CMD ["air"]