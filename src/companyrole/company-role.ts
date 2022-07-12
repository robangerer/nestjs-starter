import { Company } from '../company/company';

export class CompanyRole {
  constructor(id: string, name: string, companyId: string) {
    this.id = id;
    this.name = name;
    this.companyId = companyId;
  }

  id: string;
  name: string;
  companyId: string;
  company: Company;
}
