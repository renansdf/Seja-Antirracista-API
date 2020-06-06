import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import routes from './routes';

import '../typeorm';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log('server started on port 3333');
});
