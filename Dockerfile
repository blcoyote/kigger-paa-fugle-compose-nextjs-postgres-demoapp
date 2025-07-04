FROM oven/bun:alpine

# Set the working directory
WORKDIR /app
# Copy package.json and bun.lock
COPY package.json ./
COPY bun.lock ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the application
RUN bun run build

# Expose the port the app runs on
EXPOSE 3000

# Start the  application
CMD ["bun", "start"]
