export class UserById {
  firstName: string;
  lastName: string;
  email: string;
  active2fa: boolean;
  profilePicture: string;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    active2fa: boolean,
    profilePicture: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.active2fa = active2fa;
    this.profilePicture = profilePicture;
  }
}
