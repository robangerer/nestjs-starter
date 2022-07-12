import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompaniesController } from './company/companies.controller';
import { CompaniesService } from './company/companies.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyEntity } from './persistence/company.entity';
import { LoggerModule } from 'nestjs-pino';
import { CompanyRoleEntity } from './persistence/company-role.entity';
import { CompanyDatabaseRepository } from './persistence/company.database.repository';
import { CompanyCustomRepository } from './persistence/company.custom.repository';
import { CompanyroleService } from './companyrole/companyrole.service';
import { EmployeeController } from './employee/employee.controller';
import { EmployeeService } from './employee/employee.service';
import { CompanyroleController } from './companyrole/companyrole.controller';
import { EmployeeEntity } from './persistence/employee.entity';

@Module({
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
  controllers: [
    AppController,
    CompaniesController,
    CompanyroleController,
    EmployeeController,
  ],
  providers: [
    AppService,
    CompaniesService,
    CompanyroleService,
    EmployeeService,
  ],
})
export class AppModule {}
