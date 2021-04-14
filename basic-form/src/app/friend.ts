
export class Friend {
  firstname: string;
  lastname: string;
  email: string;
  phone: number;
  lang: string[];

  constructor(firstname: string, lastname: string, email: string, phone: number) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.phone = phone;
  }
}

