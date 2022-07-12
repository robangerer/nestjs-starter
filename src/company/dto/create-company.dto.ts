export class CreateCompanyDto {
  constructor(name: string, vat_id: number) {
    this.name = name;
    this.vat_id = vat_id;
  }

  name: string;
  vat_id: number;
}
