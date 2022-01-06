FROM node:gallium-alpine

RUN npm install -g npm
RUN npm install -g pm2
RUN apk add --no-cache bash cifs-utils samba-client sudo
WORKDIR /app

CMD ["bash"]
