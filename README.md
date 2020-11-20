# Quasar Admin Dashboard (quasar-admin-dashboard)
Vue.js dashboard

## Quick Docker Setup
```bash
docker build -f api/Dockerfile -t dockerize-api .
docker run -it -p 3333:3333 --rm dockerize-api

docker build -f ./web/Dockerfile -t dockerize-web .
docker run -it -p 8080:8080 --rm dockerize-web

# docker run --rm -it bingalls/quasar-admin-dashboard:latest
```
## Optional Docker Build
```bash
cd myproject
docker run --rm -v ${PWD}:/app -it node:13.14-alpine sh -c "yarn global add @vue/cli @vue/cli-init && vue init 'quasarframework/quasar-starter-kit' app"
docker build -t dockerize-quasar web
```
# Alternate detailed bare metal install
This section not fully tested yet
## Install the dependencies
```bash
yarn
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Lint the files
```bash
yarn run lint
```

### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
