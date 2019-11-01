FROM node:10-alpine
EXPOSE 3000
WORKDIR /app
COPY package.json package.json
RUN npm install
COPY . .
CMD ["npm","start"]