# Sử dụng Node.js làm base image
FROM node:22.4.1

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Copy package.json và package-lock.json vào container
COPY package*.json ./

# Cài đặt các package phụ thuộc
RUN npm install

# Copy toàn bộ mã nguồn vào container
COPY . .

# Mở cổng 5173
EXPOSE 5173

# Chạy ứng dụng React trong chế độ phát triển
CMD ["npm", "run", "dev", "--", "--host"]