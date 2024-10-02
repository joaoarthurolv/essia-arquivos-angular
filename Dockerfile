FROM node:alpine as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
CMD ["npm", "start"]

FROM nginx:alpine
COPY --from=builder /app/dist/essia-arquivos-angular/browser usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
COPY mime.types /etc/nginx/mime.types
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
