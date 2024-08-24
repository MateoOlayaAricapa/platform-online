FROM node:19.9.0-alpine as dependencies
WORKDIR /app
COPY package.json ./
RUN npm install --frozen-lockfile

FROM node:19.9.0-alpine as builder
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
RUN npx prisma generate
RUN npm run build

FROM node:19.9.0-alpine as prod
EXPOSE 4000
WORKDIR /app
COPY --from=builder ./app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
CMD ["node", "dist/app.js"]

# Es importante tener una etapa donde se copien las dependencias pero también se generé el cliente de prisma
# Con ello, queda el cliente instalado en las depedencias
# Finalmente, se usa el node_modules para copiarlo en la etapa de producción