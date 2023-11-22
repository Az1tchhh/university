import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomePageComponent} from "./welcome-page/welcome-page.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {TestComponent} from "./test/test.component";
import {NewsPageComponent} from "./news-page/news-page.component";
import {GradesPageComponent} from "./grades-page/grades-page.component";
import {StudentProfilePageComponent} from "./student-profile-page/student-profile-page.component";
import {TranscriptPageComponent} from "./transcript-page/transcript-page.component";
import {TeachersPageComponent} from "./teachers-page/teachers-page.component";
import {SchedulePageComponent} from "./schedule-page/schedule-page.component";
import {AttendancePageComponent} from "./attendance-page/attendance-page.component";
import {CoursesPageComponent} from "./courses-page/courses-page.component";
import {ManageStudentsPageComponent} from "./manage-students-page/manage-students-page.component";
import {AddAttendanceComponent} from "./add-attendance/add-attendance.component";

const routes: Routes = [
  {path:'', component:WelcomePageComponent},
  {path:'main', component:MainPageComponent},
  {path:'test', component:TestComponent},
  {path:'news', component:NewsPageComponent},
  {path:'grades/:student_id', component:GradesPageComponent},
  {path:'profile/:student_id', component:StudentProfilePageComponent},
  {path:'transcript/:student_id', component:TranscriptPageComponent},
  {path:'teachers/:student_id', component:TeachersPageComponent},
  {path:'schedule/:student_id', component:SchedulePageComponent},
  {path:'attendance/:group_id', component:AttendancePageComponent},
  {path:'courses/:student_id', component:CoursesPageComponent},
  {path:'mng/students', component:ManageStudentsPageComponent},
  {path:'add/attendance', component:AddAttendanceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
