import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';
import * as uuidv4 from 'uuid/v4';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 255 })
  email: string;

  @Column('text')
  password: string;
}
