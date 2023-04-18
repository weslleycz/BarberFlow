import cors from 'cors';
import express from 'express';
import helmet from 'helmet';

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  app.use(cors());
  next();
});

app.use(helmet());

app.use(cors());

app.use(express.json());

app.get('/api', async () => {});

app.listen(3333);
