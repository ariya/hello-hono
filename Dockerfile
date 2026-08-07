FROM node:24.19.0-alpine3.24

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY --chown=root:root . .

USER node

EXPOSE 3000

ENV NODE_ENV=production
ENV HOST=0.0.0.0

HEALTHCHECK CMD wget -qO- http://127.0.0.1:3000/health || exit 1

CMD ["npm", "start"]
