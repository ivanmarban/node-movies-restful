FROM mhart/alpine-node:0.10.40

WORKDIR /app

ADD . .

RUN apk update \
  && npm install \
  && rm -rf /tmp/* /var/cache/apk/* /root/.npm /root/.node-gyp  

EXPOSE 3000

CMD ["node", "server.js"]