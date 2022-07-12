import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeEntity } from '../persistence/employee.entity';
import { Repository, Transaction } from 'typeorm';
import { CompanyEntity } from '../persistence/company.entity';
import { Employee } from './employee';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(EmployeeEntity)
    private employeeRepository: Repository<EmployeeEntity>,
    @InjectRepository(CompanyEntity)
    private companyRepository: Repository<CompanyEntity>,
  ) {}

  async create(employee: Employee, companyId: string): Promise<Employee> {
    const company = await this.companyRepository.findOne(companyId);
    employee.company = company;
    return this.employeeRepository.save(employee);
  }

  async findAllByCompanyId(companyId: string): Promise<Employee[]> {
    return this.employeeRepository
      .createQueryBuilder('employee')
      .leftJoinAndSelect('employee.company', 'company')
      .where('company.id = :companyId', { companyId: companyId })
      .getMany();
  }
}
