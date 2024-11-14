# Use Node.js as the base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./
COPY packages/frontend/package.json ./packages/frontend/

# Install dependencies
RUN yarn install

# Copy the frontend code
COPY packages/frontend ./packages/frontend

# Build the frontend
RUN yarn workspace frontend build

# Expose the port
EXPOSE 3000

# Start the frontend server
CMD ["yarn", "workspace", "frontend", "start"]
