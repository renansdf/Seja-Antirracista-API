import 'reflect-metadata';
import { Router } from 'express';
import RecordsRepository from '@modules/records/infra/typeorm/repositories/RecordsRepository';

const routes = Router();

routes.post('/records', async (request, response) => {
  const recordsRepository = new RecordsRepository();
  const { name, value } = request.body;

  const record = await recordsRepository.create(name, value);

  return response.json(record);
});

routes.put('/records', async (request, response) => {
  const recordsRepository = new RecordsRepository();
  const { name, value } = request.body;

  const record = await recordsRepository.update(name, value);

  return response.json(record);
});

routes.get('/records:name', async (request, response) => {
  const name = request.query.name?.toString();

  const recordsRepository = new RecordsRepository();

  const record = await recordsRepository.show(name);

  return response.json(record);
});

export default routes
