FROM quay.octanner.io/base/oct-node:4.4.6

RUN mkdir -p /app
WORKDIR /app

COPY . /app
RUN npm install

EXPOSE 8080

CMD [ "npm", "start" ]