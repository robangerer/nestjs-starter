import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import * as request from 'supertest';
import { CompanyroleController } from '../src/companyrole/companyrole.controller';
import { CompaniesController } from '../src/company/companies.controller';
import { CompaniesService } from '../src/company/companies.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyEntity } from '../src/persistence/company.entity';
import { CompanyRoleEntity } from '../src/persistence/company-role.entity';
import { EmployeeEntity } from '../src/persistence/employee.entity';
import { LoggerModule } from 'nestjs-pino';

describe('CompanyController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'username',
          password: 'password',
          database: 'default_database',
          entities: [CompanyEntity, CompanyRoleEntity, EmployeeEntity],
          synchronize: true,
        }),
        TypeOrmModule.forFeature([
          CompanyEntity,
          CompanyRoleEntity,
          EmployeeEntity,
        ]),
        LoggerModule.forRoot(),
      ],
      controllers: [CompaniesController],
      providers: [CompaniesService],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init;
  });

  it('/companies (GET)', () => {
    return request(app.getHttpServer()).get('/companies').expect(200);
  });
});
