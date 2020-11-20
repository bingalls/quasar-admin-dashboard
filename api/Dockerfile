# develop stage
FROM node:14.10-alpine as develop-api
EXPOSE 3333
WORKDIR /app/
RUN apk update && apk upgrade
RUN apk add git
COPY api/package*.json ./
RUN npm i
COPY ./api/ ./
CMD node --trace-warnings ace serve
# --watch

# build stage
#FROM develop-stage as build-stage
#WORKDIR /app/web
#RUN yarn
#RUN quasar build
# production stage
#FROM nginx:1.17.5-alpine as production-stage
#WORKDIR /app/web
#COPY --from=build-stage /app/dist/spa /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]

