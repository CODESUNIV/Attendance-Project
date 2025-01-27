# Use Node.js 16 Alpine image as the base
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy only package files first (for efficient caching during builds)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Expose the development port
EXPOSE 3030

# Start the app in development mode with hosting enabled
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
