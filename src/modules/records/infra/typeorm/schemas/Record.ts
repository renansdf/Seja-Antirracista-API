import { ObjectID, Entity, UpdateDateColumn, CreateDateColumn, ObjectIdColumn, Column } from 'typeorm';

@Entity('records')
class Record {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  value: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Record;
