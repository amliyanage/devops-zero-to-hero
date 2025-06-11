#use offical Node.js image
FROM node:22

# Create app directory
WORKDIR /app

# Copy package.json and install dependancies
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Expose Port
EXPOSE 3000

# Start the app
CMD [ "node" , "src/index.js" ]