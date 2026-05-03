# Hello, Hono!

A minimal HTTP server built with [Hono](https://hono.dev).

[![Test with Nodejs](https://github.com/ariya/hello-hono/actions/workflows/test-nodejs.yml/badge.svg)](https://github.com/ariya/hello-hono/actions/workflows/test-nodejs.yml)
[![Test with Bun](https://github.com/ariya/hello-hono/actions/workflows/test-bun.yml/badge.svg)](https://github.com/ariya/hello-hono/actions/workflows/test-bun.yml)
[![Test with Deno](https://github.com/ariya/hello-hono/actions/workflows/test-deno.yml/badge.svg)](https://github.com/ariya/hello-hono/actions/workflows/test-deno.yml)
[![Test with Podman](https://github.com/ariya/hello-hono/actions/workflows/test-podman.yml/badge.svg)](https://github.com/ariya/hello-hono/actions/workflows/test-podman.yml)
[![Test with Docker](https://github.com/ariya/hello-hono/actions/workflows/test-docker.yml/badge.svg)](https://github.com/ariya/hello-hono/actions/workflows/test-docker.yml)

The server listens on `localhost:3000`.

Run with Node.js:
```
node index.js
```

Run with Bun:
```
bun index.js
```

Run with Deno:
```
deno --unstable-detect-cjs --allow-net --allow-env index.js
```

Run with Podman:
```
podman build -t hello-hono .
podman run -d -p 3000:3000 hello-hono
```

Run with Docker:
```
docker build -t hello-hono .
docker run -d -p 3000:3000 hello-hono
```
