export class CompanyDto {
  constructor(id: string, name: string, vat_id: number) {
    this.id = id;
    this.name = name;
    this.vat_id = vat_id;
  }

  id: string;
  name: string;
  vat_id: number;
}
