FROM node:7.1.0

RUN ["mkdir", "-p", "/usr/src/app"]

WORKDIR /usr/src/app

COPY . /usr/src/app

ENV PORT 3000

RUN npm install

CMD ["npm", "start"]
