export class CreateEmployeeDto {
  constructor(identity: number, name: string) {
    this.identity = identity;
    this.name = name;
  }

  identity: number;
  name: string;
}
