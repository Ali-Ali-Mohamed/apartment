# Use an official Node.js LTS version with Alpine for a small image size
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy dependency files and install
COPY package*.json ./
RUN npm install -g typescript
RUN npm install

# Copy the entire project
COPY . .

# Ensure wait-port has executable permissions
RUN chmod +x ./node_modules/.bin/wait-port

# Ensure sequelize-cli has executable permissions
RUN chmod +x ./node_modules/.bin/sequelize-cli

# Build the TypeScript code
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Run the compiled server file
CMD ["node", "dist/server.js"]
