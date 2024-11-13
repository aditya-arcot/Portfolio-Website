FROM nginx:1.27.2-alpine3.20
COPY nginx.conf /etc/nginx/nginx.conf
WORKDIR /src
COPY dist .
CMD ["nginx", "-g", "daemon off;"]