# Use official Node.js image with Alpine for a small image size
FROM node:20-alpine

# Set working directory inside container
WORKDIR /app

# Copy dependency files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the entire frontend project
COPY . .

# Build the Next.js project
RUN npm run build

# Expose the frontend port
EXPOSE 3001

# Start the production server
CMD ["npm", "start"]
