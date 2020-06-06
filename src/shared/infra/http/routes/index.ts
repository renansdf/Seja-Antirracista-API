import 'reflect-metadata';
import { Router } from 'express';
import RecordsRepository from '@modules/records/infra/typeorm/repositories/RecordsRepository';

const routes = Router();

routes.post('/records', async (request, response) => {
  const recordsRepository = new RecordsRepository();
  const { value } = request.body;

  const record = await recordsRepository.create(value);

  return response.json(record);
});

routes.put('/records', async (request, response) => {
  const recordsRepository = new RecordsRepository();
  const { value } = request.body;

  const record = await recordsRepository.update(value);

  return response.json(record);
});

routes.get('/records', async (request, response) => {
  const recordsRepository = new RecordsRepository();

  const record = await recordsRepository.index();

  return response.json(record);
});

export default routes
