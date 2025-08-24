FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
#  install deps in a way that respects the lock file. Ideal for CI/CD
RUN npm ci
COPY . .
RUN npm run build
# Remove dev dependencies from node_modules
RUN npm prune --production

FROM node:22-alpine
WORKDIR /app
COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules/
COPY package.json .
EXPOSE 3000
ENV NODE_ENV=production
CMD [ "node", "build" ]

# using this guide - https://khromov.se/dockerizing-your-sveltekit-applications-a-practical-guide/
