# stage 1 building the code
FROM node as builder
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# stage 2
FROM node
WORKDIR /usr/app
ENV DATABASE_URL=postgres://fullstack:fullstack@db:5432/fullstack_dev
COPY package*.json ./
COPY wait-for-it.sh .
RUN npm install --production

COPY --from=builder /usr/app/dist ./dist

#COPY .env .

EXPOSE 4000
CMD [ "npm" ,"start" ]