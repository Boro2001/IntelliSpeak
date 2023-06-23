
FROM node:14 as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:latest
COPY --from=builder /app/dist/frontend /usr/share/nginx/html

# Copy custom NGINX configuration if needed
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
