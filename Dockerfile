ARG PORT=3001
ARG PORT_DEBUG=9001

# Development
FROM node:latest AS development
ARG PORT
ARG PORT_DEBUG
ENV PORT ${PORT}
EXPOSE ${PORT} ${PORT_DEBUG}
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "npm", "run", "start:watch" ]

# Production
FROM node:latest AS production

ARG PORT
ENV PORT ${PORT}
EXPOSE ${PORT}

COPY --from=development /home/node/app/ ./app/
COPY --from=development /home/node/package*.json ./
RUN npm ci
CMD [ "nodemon", "app" ]