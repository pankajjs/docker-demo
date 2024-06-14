From node:20-alpine

WORKDIR /app

COPY package* .

RUN npm install

COPY . .

# RUN npm install
# RUN npm run dev

EXPOSE 3000

CMD ["npx", "nodemon", "index.ts"]