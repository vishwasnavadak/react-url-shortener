FROM node:8.9.4-alpine
LABEL authors="John Nolette <john@neetgroup.net>"

ADD . /opt/app
WORKDIR /opt/app
RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]
