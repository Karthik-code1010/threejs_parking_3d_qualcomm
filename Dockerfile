FROM node:16-alpine AS build
WORKDIR /app
COPY ./  /app/
RUN node -v
RUN npm install --legacy-peer-deps
RUN npm -v
RUN npm run build

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
EXPOSE 80 443
COPY ./ssl/ /usr/share/nginx/html/ssl
COPY --from=build /app/dist/angular-three /usr/share/nginx/html
COPY ./default.conf /etc/nginx/conf.d/default.conf
