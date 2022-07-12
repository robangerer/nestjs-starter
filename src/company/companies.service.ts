import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyEntity } from '../persistence/company.entity';
import { getConnection, Repository } from 'typeorm';
import { Company } from './company';
import { PinoLogger } from 'nestjs-pino';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(CompanyEntity)
    private companyRepository: Repository<CompanyEntity>,
    private readonly logger: PinoLogger,
  ) {}

  create(company: Company): Promise<Company> {
    this.logger.info('creating company = ', { company });
    return this.companyRepository.save(company);
  }

  findAll(): Promise<Company[]> {
    this.logger.info('finding all companies');
    return this.companyRepository.find();
  }

  deleteAll() {
    this.logger.info('deleteAll()');
    getConnection().createQueryBuilder().delete().from(CompanyEntity).execute();
  }

  findOnyById(id: string): Promise<Company> {
    this.logger.info(`findOneById(${id}`);
    return this.companyRepository.findOne(id);
  }

  deleteById(id: string) {
    this.logger.info('deleting company with id = %s', id);
    this.companyRepository.delete(id);
  }

  update(company: Company): Promise<Company> {
    return this.companyRepository.save(company);
  }
}
