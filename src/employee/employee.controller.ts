import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { EmployeeDto } from '../company/dto/employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeeEntity } from '../persistence/employee.entity';
import { CompanyEntity } from '../persistence/company.entity';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from '../company/dto/create-employee.dto';
import { Employee } from './employee';
import { v4 as uuid } from 'uuid';

@Controller('companies/:id/employees')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  create(
    @Body() createEmployeeDto: CreateEmployeeDto,
    @Param('id', ParseUUIDPipe) companyId: string,
  ): Promise<EmployeeDto> {
    return this.employeeService.create(
      new Employee(
        uuid(),
        createEmployeeDto.name,
        createEmployeeDto.identity,
        null,
      ),
      companyId,
    );
  }

  @Get()
  findAllByCompanyId(
    @Param('id', ParseUUIDPipe) companyId: string,
  ): Promise<EmployeeDto[]> {
    return this.employeeService.findAllByCompanyId(companyId);
  }
}
