import {
  Column,
  CreateDateColumn,
  Entity,
  EntityRepository,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CompanyEntity } from './company.entity';

@Entity()
export class EmployeeEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  identity: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp with time zone' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'modifier_at', type: 'timestamp with time zone' })
  modifiedAt: Date;

  @ManyToOne(() => CompanyEntity)
  company: CompanyEntity;
}
