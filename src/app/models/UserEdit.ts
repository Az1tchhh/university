export interface UserEdit{
  imageData: Uint8Array | number[],
  firstName: string,
  lastName: string,
  password:string,
  department: string,
  program: string,
  yearOfSubmission: string,
  dateOfBirth: string,
  idNo: string,
  permanentAddress: string,
  maillingAddress: string,
  phone: string,
  email: string,
  nationality: string,
  date: Date;
}
