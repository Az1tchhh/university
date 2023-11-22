import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RouterModule } from "@angular/router";
import { StompRService } from '@stomp/ng2-stompjs';
import { TestComponent } from './test/test.component';
import { FormsModule } from "@angular/forms";
import { NewsPageComponent } from './news-page/news-page.component';
import { GradesPageComponent } from './grades-page/grades-page.component';
import { AttendancePageComponent } from './attendance-page/attendance-page.component';
import { SchedulePageComponent } from './schedule-page/schedule-page.component';
import { TeachersPageComponent } from './teachers-page/teachers-page.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { TranscriptPageComponent } from './transcript-page/transcript-page.component';
import { StudentProfilePageComponent } from './student-profile-page/student-profile-page.component';
import {HttpClientModule} from "@angular/common/http";
import { ManageStudentsPageComponent } from './manage-students-page/manage-students-page.component';
import { AddAttendanceComponent } from './add-attendance/add-attendance.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    MainPageComponent,
    TestComponent,
    NewsPageComponent,
    GradesPageComponent,
    AttendancePageComponent,
    SchedulePageComponent,
    TeachersPageComponent,
    CoursesPageComponent,
    TranscriptPageComponent,
    StudentProfilePageComponent,
    ManageStudentsPageComponent,
    AddAttendanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StompRService],
  bootstrap: [AppComponent]
})
export class AppModule { }
