import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserInfo} from "../models/UserInfo";
import {UserEdit} from "../models/UserEdit";
import {RegisterUserService} from "../register-user.service";

@Component({
  selector: 'app-manage-students-page',
  templateUrl: './manage-students-page.component.html',
  styleUrls: ['./manage-students-page.component.css']
})
export class ManageStudentsPageComponent implements OnInit{
  role:string = ""
  namee:string = ""
  isCreate:boolean = false;
  isEdit:boolean = false;


  imageData!: Uint8Array | number[]
  firstName!: string
  lastName!: string
  password!:string
  department!: string
  program!: string
  yearOfSubmission!: string
  dateOfBirth!: string
  idNo!: string
  permanentAddress!: string
  maillingAddress!: string
  phone!: string
  email!: string
  nationality!: string
  date!: Date;

  user = {} as UserEdit;
  constructor(private router: Router,
              private registerUserService: RegisterUserService) {
  }
  ngOnInit() {

    const firstName = localStorage.getItem('firstName');
    const role = localStorage.getItem('role');
    if (firstName && role) {
      this.role = role;
      this.namee = firstName;
    }

  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    window.alert("logged out");
    window.location.href = '';
  }

  on(str: string){
    if(str == 'add'){
      this.isCreate = true;
      this.isEdit = false;
    }
    if(str == 'edit'){
      this.isCreate = false;
      this.isEdit = true;
    }
  }

  submit(){
    this.user.nationality = this.nationality
    this.user.email = this.email
    this.user.phone = this.phone
    this.user.permanentAddress = this.permanentAddress
    this.user.idNo = this.idNo
    this.user.dateOfBirth = this.dateOfBirth
    this.user.yearOfSubmission = this.yearOfSubmission
    this.user.program = this.program
    this.user.lastName = this.lastName
    this.user.firstName = this.firstName
    this.user.password = this.password
    this.user.date = this.date
    console.log(this.user)
    this.registerUserService.registerStudent(this.user).subscribe(
      data=>{
        console.log(data);
      }
    )
  }
}
