# 1. Use an official Node.js LTS version with Alpine for a small image size
FROM node:18-alpine

# 2. Set working directory inside container
WORKDIR /app

# 3. Copy dependency files and install
COPY package*.json ./
RUN npm install -g typescript
RUN npm install

# 4. Copy the entire project
COPY . .

# 5. Ensure wait-port has executable permissions
RUN chmod +x ./node_modules/.bin/wait-port
# Ensure sequelize-cli has executable permissions
RUN chmod +x ./node_modules/.bin/sequelize-cli

# 6. Build the TypeScript code
RUN npm run build

# 7. Expose the port the app runs on
EXPOSE 3000

# 8. Run the compiled server file
CMD ["node", "dist/server.js"]
