// server.ts
import 'dotenv/config';
import express from 'express';
import { WebhookController } from './controllers/WebhookController';

const app = express();
app.use(express.json());

const webhookController = new WebhookController();


app.post('/api/v1/active-campaing', (req, res) => webhookController.handle(req, res));

app.get('/check/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.listen(3000, () => {
  console.log('running on port: 3000');
});