# develop stage
FROM node:13.14-alpine as develop-stage
WORKDIR /web/app
COPY web/package*.json ./web
RUN cd web
RUN yarn
RUN quasar dev
COPY ./web ./web
# build stage
FROM develop-stage as build-stage
RUN cd web
RUN yarn
RUN quasar build
# production stage
FROM nginx:1.17.5-alpine as production-stage
COPY --from=build-stage /app/dist/spa /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

