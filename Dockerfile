FROM node:16.19.0 as build

WORKDIR /usr/src/app

COPY . .

RUN yarn install

FROM node:16.19.0 as execute

ENV PORT=8081

COPY --from=build /usr/src/app /usr/src/app

WORKDIR /usr/src/app

CMD ["yarn", "start"]