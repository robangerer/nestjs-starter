import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { CompanyRoleEntity } from '../persistence/company-role.entity';
import { CompanyroleService } from './companyrole.service';
import { CompanyRole } from './company-role';
import { CreateCompanyRoleDto } from './dto/create-company-role.dto';
import { v4 as uuid } from 'uuid';

@Controller('companies/')
export class CompanyroleController {
  constructor(private readonly companyRoleService: CompanyroleService) {}

  @Get(':id/roles')
  findAllByCompanyId(
    @Param('id', ParseUUIDPipe) company_id: string,
  ): Promise<CompanyRole[]> {
    return this.companyRoleService.findAllByCompanyId(company_id);
  }

  @Post(':id/roles')
  create(
    @Param('id', ParseUUIDPipe) company_id: string,
    @Body() createCompanyRoleDto: CreateCompanyRoleDto,
  ): Promise<CompanyRole> {
    return this.companyRoleService.create(
      new CompanyRole(uuid(), createCompanyRoleDto.name, company_id),
      company_id,
    );
  }
}
