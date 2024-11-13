FROM nginx:latest 

COPY nginx.conf /etc/nginx/nginx.conf

COPY dist/store-manager-ui /usr/share/nginx/html
COPY dist/store-manager-ui /etc/nginx/html

EXPOSE 8086

CMD ["nginx", "-g", "daemon off;"]
