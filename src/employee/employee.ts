import { Company } from '../company/company';

export class Employee {
  constructor(id: string, name: string, identity: number, company: Company) {
    this.id = id;
    this.name = name;
    this.identity = identity;
    this.company = company;
  }

  id: string;
  name: string;
  identity: number;
  company: Company;
}
