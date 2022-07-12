import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CompanyRoleEntity } from './company-role.entity';
import { EmployeeEntity } from './employee.entity';

@Entity()
export class CompanyEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  vat_id: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp with time zone' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'modifier_at', type: 'timestamp with time zone' })
  modifiedAt: Date;

  @OneToMany(
    () => CompanyRoleEntity,
    (companyRoleEntity) => companyRoleEntity.company,
  )
  companyRoles: CompanyRoleEntity[];

  @OneToMany(() => EmployeeEntity, (employeeEntity) => employeeEntity.company)
  employees: EmployeeEntity[];
}
