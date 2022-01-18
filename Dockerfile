FROM node:14

RUN npm i -g @nestjs/cli

WORKDIR /usr/share/app

COPY package.json .

RUN npm i

COPY . .

EXPOSE 3000

CMD ["nest", "start"]
