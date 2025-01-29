# Use Node.js 16 Alpine image as the base
FROM node:16-alpine

# Install additional dependencies to ensure npm is available
RUN apk add --no-cache bash curl

# Set the working directory inside the container
WORKDIR /app

# Copy only package files first (to optimize Docker cache usage)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Expose the development port
EXPOSE 3030

# Start the app in development mode
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]