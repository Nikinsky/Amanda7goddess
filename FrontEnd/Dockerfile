# ./Frontend/Dockerfile
FROM node:18-alpine AS builder
WORKDIR /app

# Копируем env файл
COPY .env .env

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app

# Копируем готовую сборку
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "start"]