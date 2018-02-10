export class User {
  constructor(public email: string,
              public name: string,
              private password: string){}

  matches(another: User): boolean {
    return another !== undefined && another.email === this.email && another.password === this.password
  }
}

export const users = {
  "ricardo@teste.com": new User('ricardo@teste.com', 'Ricardo', '123'),
  "bernardo@testeII.com": new User('bernardo@testeII.com', 'Bernardo', '123')
}
