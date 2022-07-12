import { EntityRepository } from 'typeorm';
import { CompanyEntity } from './company.entity';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';
import { Company } from '../company/company';

@EntityRepository(CompanyEntity)
export class CompanyCustomRepository extends BaseRepository<CompanyEntity> {}
