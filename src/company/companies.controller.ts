import {
  Body,
  Controller,
  Delete,
  Get,
  Injectable,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { CompaniesService } from './companies.service';
import { PinoLogger } from 'nestjs-pino';
import { CompanyDto } from './dto/company.dto';
import { Company } from './company';
import { v4 as uuid } from 'uuid';

@Controller('companies')
export class CompaniesController {
  constructor(
    private readonly companyService: CompaniesService,
    private readonly logger: PinoLogger,
  ) {}

  @Get()
  findAll(): Promise<CompanyDto[]> {
    this.logger.info('GET findAll companies');
    return this.companyService.findAll();
  }

  @Post()
  create(@Body() createCompanyDto: CreateCompanyDto): Promise<CompanyDto> {
    this.logger.info('i am a logger');
    return this.companyService.create(
      new Company(uuid(), createCompanyDto.name, createCompanyDto.vat_id),
    );
  }

  @Delete()
  deleteAll() {
    this.logger.info('DELETE deleteAll()');
    return this.companyService.deleteAll();
  }

  @Delete(':id')
  deleteById(@Param('id', ParseUUIDPipe) id: string) {
    this.logger.info(`DELETE delete(${id})`);
    return this.companyService.deleteById(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() createCompanyDto: CreateCompanyDto,
  ) {
    return this.companyService.update(
      new Company(id, createCompanyDto.name, createCompanyDto.vat_id),
    );
  }
}
