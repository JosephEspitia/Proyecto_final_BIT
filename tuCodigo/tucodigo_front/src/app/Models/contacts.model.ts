export class Contact {
  _id: string;
  contactName: string;
  contactEmail: string;
  contactPhone: number;
  contactContent: string;
  contactAnswers: string

  constructor(
    _id = '',
    contactName = '',
    contactEmail = '',
    contactPhone = 0,
    contactContent = '',
    contactAnswers = ''
  ) {
    this._id=_id;
    this.contactName = contactName;
    this.contactEmail = contactEmail;
    this.contactPhone = contactPhone;
    this.contactContent = contactContent;
    this.contactAnswers = contactAnswers
  }
}
