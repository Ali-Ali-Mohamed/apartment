# 1. Use official Node.js image with Alpine for a small image size
FROM node:20-alpine

# 2. Set working directory inside container
WORKDIR /app

# 3. Copy dependency files and install dependencies
COPY package*.json ./
RUN npm install

# 4. Copy the entire frontend project
COPY . .

# 5. Build the Next.js project (TypeScript build for frontend)
RUN npm run build

# 6. Expose the frontend port (matching the one you're using for production)
EXPOSE 3001

# 7. Start the production server
CMD ["npm", "start"]
