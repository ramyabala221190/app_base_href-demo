
FROM node:alpine as node

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm cache clean --force
RUN npm install
COPY . .

RUN npm run build


FROM nginx:alpine

VOLUME /var/cache/nginx 

RUN rm -r /usr/share/nginx/html/*

COPY --from=node /app/dist/base-href-demo-v1/ /usr/share/nginx/html/v1
COPY --from=node /app/dist/base-href-demo-v2/ /usr/share/nginx/html/v2

COPY nginx.config /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"] 
