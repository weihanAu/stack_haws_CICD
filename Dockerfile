FROM node

WORKDIR /app

COPY package.json /app

COPY . /app

RUN npm install

CMD ["npm","start"]