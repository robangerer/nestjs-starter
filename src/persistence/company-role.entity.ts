import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CreateCompanyDto } from '../company/dto/create-company.dto';
import { type } from 'os';
import { Company } from '../company/company';
import { CompanyEntity } from './company.entity';
import { CompaniesService } from '../company/companies.service';

@Entity()
export class CompanyRoleEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(
    (type) => CompanyEntity,
    (companyEntity) => companyEntity.companyRoles,
  )
  company: CompanyEntity;

  @Column()
  companyId: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp with time zone' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'modified_at', type: 'timestamp with time zone' })
  modifiedAt: Date;
}
