FROM node:18-slim

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy project files
COPY . .

# Generate Prisma client for Debian (glibc)
RUN npx prisma generate

# Build TypeScript
RUN npm run build

EXPOSE 4000

CMD ["node", "dist/server.js"]
