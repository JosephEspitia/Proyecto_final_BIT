export class Contact {
  contactName: string;
  contactEmail: string;
  contactPhone: number;
  contactContent: string;

  constructor(
    contactName = '',
    contactEmail = '',
    contactPhone = 0,
    contactContent = ''
  ) {
    this.contactName = contactName;
    this.contactEmail = contactEmail;
    this.contactPhone = contactPhone;
    this.contactContent = contactContent;
  }
}
