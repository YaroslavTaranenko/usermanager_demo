FROM golang:1.17-alpine3.14 AS builder
RUN apk --no-cache add make git gcc libtool musl-dev ca-certificates dumb-init
WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY . .
RUN go build

CMD ["/app/usermanager"]
