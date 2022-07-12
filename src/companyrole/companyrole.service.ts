import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyRoleEntity } from '../persistence/company-role.entity';
import { Repository } from 'typeorm';
import { CompanyRole } from './company-role';
import { Company } from '../company/company';
import { CompanyEntity } from '../persistence/company.entity';

@Injectable()
export class CompanyroleService {
  constructor(
    @InjectRepository(CompanyRoleEntity)
    private readonly companyRoleRepository: Repository<CompanyRoleEntity>,
    @InjectRepository(CompanyEntity)
    private readonly companyRepository: Repository<CompanyEntity>,
  ) {}

  async create(
    companyRole: CompanyRole,
    companyId: string,
  ): Promise<CompanyRole> {
    if ((await this.companyRepository.count({ id: companyId })) < 1) {
      throw new NotFoundException(
        `No company is saved with given id = ${companyId}`,
      );
    }
    return this.companyRoleRepository.save(companyRole);
  }

  findAllByCompanyId(companyId: string): Promise<CompanyRole[]> {
    if (!this.companyRepository.findOne({ id: companyId })) {
      throw new NotFoundException(
        `No company is saved with given id = ${companyId}`,
      );
    }
    return this.companyRoleRepository.find({ where: { companyId } });
  }
}
