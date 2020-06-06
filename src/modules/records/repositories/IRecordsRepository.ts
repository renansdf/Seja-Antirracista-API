import Record from '../infra/typeorm/schemas/Record';

export default interface IRecordsRepository {
  create(value: number): Promise<Record>;
  update(value?: number): Promise<Record>;
  index(): Promise<Record[]>
}
