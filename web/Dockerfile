# develop stage
FROM node:14.10-alpine as develop-web
EXPOSE 8080
WORKDIR /app/
COPY web/package.json web/yarn.lock ./
RUN npm rebuild node-sass
RUN yarn
RUN yarn global add @quasar/cli
COPY ./web/ ./
CMD quasar dev

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

