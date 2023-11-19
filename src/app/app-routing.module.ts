import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomePageComponent} from "./welcome-page/welcome-page.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {TestComponent} from "./test/test.component";
import {NewsPageComponent} from "./news-page/news-page.component";

const routes: Routes = [
  {path:'', component:WelcomePageComponent},
  {path:'main', component:MainPageComponent},
  {path:'test', component:TestComponent},
  {path:'news', component:NewsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
