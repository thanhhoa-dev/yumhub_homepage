# Sử dụng node image với phiên bản 20 làm image nền
FROM node:20 AS build

# Thiết lập thư mục làm việc
WORKDIR /app

# Sao chép package.json và package-lock.json
COPY package*.json ./

# Cài đặt các phụ thuộc
RUN npm install

# Sao chép mã nguồn ứng dụng
COPY . .

# Xây dựng ứng dụng
RUN npm run build

# Sử dụng nginx để phục vụ ứng dụng
FROM nginx:alpine

# Sao chép các tệp build vào thư mục nginx
COPY --from=build /app/build /usr/share/nginx/html

# Sao chép tệp cấu hình nginx tùy chỉnh
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port (nginx sẽ tự động sử dụng cổng được chỉ định bởi Heroku)
EXPOSE $PORT

# Khởi động nginx
CMD ["nginx", "-g", "daemon off;"]
