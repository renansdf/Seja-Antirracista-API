import Record from '@modules/records/infra/typeorm/schemas/Record';
import IRecordsRepository from '@modules/records/repositories/IRecordsRepository';
import { getMongoRepository, MongoRepository } from 'typeorm';

class RecordsRepository implements IRecordsRepository {

  private ormRepository: MongoRepository<Record>;

  constructor() {
    this.ormRepository = getMongoRepository(Record);
  }

  public async create(name: string, value: number): Promise<Record> {
    let record = await this.ormRepository.findOne({ where: { name } });

    if (record) {
      return record;
    }

    record = this.ormRepository.create({ name, value });

    await this.ormRepository.save(record);

    return record;
  }

  public async update(name: string, value?: number): Promise<Record> {
    let record = await this.ormRepository.findOne({ where: { name } });

    if (!record) {
      record = this.ormRepository.create({ name, value });
    } else {
      if (value) {
        record.value = value;
      } else {
        record.value = record.value + 1;
      }
    }

    await this.ormRepository.save(record);

    return record;
  }

  public async show(name: string): Promise<Record | undefined> {
    const record = await this.ormRepository.findOne({ where: { name } });
    return record;
  }

}

export default RecordsRepository;
