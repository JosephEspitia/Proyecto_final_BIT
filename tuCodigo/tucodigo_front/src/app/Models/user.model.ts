export class User {
  _id: string;
  photoUser: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
  actualCourse: string;
  goals: string[];
  permissionsAdmin: boolean;
  permissionsClient: boolean;
  permissionsVerified: boolean;

  constructor(
    _id = '',
    photoUser = '',
    name = '',
    lastName = '',
    email = '',
    password = '',
    passwordConfirm = '',
    actualCourse = '',
    goals = [],
    permissionsAdmin = false,
    permissionsClient = true,
    permissionsVerified = false
  ) {
    this._id = _id;
    this.photoUser = photoUser;
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.passwordConfirm = passwordConfirm;
    this.actualCourse = actualCourse;
    this.goals = goals;
    this.permissionsAdmin = permissionsAdmin;
    this.permissionsClient = permissionsClient;
    this.permissionsVerified = permissionsVerified;
  }
}
