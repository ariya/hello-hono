const { consola } = require('consola/basic');
const { Hono } = require('hono');
const { serve } = require('@hono/node-server');
const { secureHeaders } = require('hono/secure-headers');

const app = new Hono();

app.use(secureHeaders());

app.get('/', (c) => c.text('Hello from Hono!'));

app.get('/health', (c) => c.text(`OK ${Date.now()}`));

const port = process.env.PORT || 3000;
const hostname = process.env.HOST || '127.0.0.1';

serve({ fetch: app.fetch, port, hostname });
consola.log('Listening on', `${hostname}:${port}`);
