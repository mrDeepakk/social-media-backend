FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy all source code
COPY . .

# Generate Prisma client
RUN npx prisma generate

EXPOSE 4000

# Run directly via ts-node (no build step)
CMD ["npm", "run", "dev"]
