export class EmployeeDto {
  constructor(id: string, identity: number, name: string) {
    this.identity = identity;
    this.name = name;
    this.id = id;
  }

  id: string;
  identity: number;
  name: string;
}
