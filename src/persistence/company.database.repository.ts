import { Injectable } from '@nestjs/common';
import { Company } from '../company/company';
import { CompanyCustomRepository } from './company.custom.repository';
import { CompanyEntity } from './company.entity';

@Injectable()
export class CompanyDatabaseRepository {
  constructor(
    private readonly companyTypeOrmRepository: CompanyCustomRepository,
  ) {}

  async exists(companyId: string): Promise<boolean> {
    return (
      (await this.companyTypeOrmRepository.count({
        where: { id: companyId },
      })) > 0
    );
  }

  async find(): Promise<CompanyEntity[]> {
    return this.companyTypeOrmRepository.find();
  }

  async save(company: Company): Promise<Company> {
    return this.companyTypeOrmRepository.save(company);
  }
  async delete(id: string): Promise<any> {
    return this.companyTypeOrmRepository.delete(id);
  }
}
