# To Generate the build

FROM node:slim AS build

WORKDIR /app

COPY . .


ARG REACT_APP_BACKEND_URL

RUN npm i && \
    npm run build





# Proudction Build

FROM alpine

RUN apk add nginx

COPY default.conf  /etc/nginx/http.d/

COPY --from=build  /app/build/  /usr/share/nginx/html/


CMD ["nginx", "-g", "daemon off;"]
