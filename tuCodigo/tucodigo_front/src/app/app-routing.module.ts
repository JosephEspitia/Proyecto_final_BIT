import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './Components/contact/contact.component';
import { CssCourseComponent } from './Components/css-course/css-course.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ForumComponent } from './Components/forum/forum.component';
import { HomeComponent } from './Components/home/home.component';
import { HtmlCourseComponent } from './Components/html-course/html-course.component';
import { JavaScriptCourseComponent } from './Components/java-script-course/java-script-course.component';
import { LoginComponent } from './Components/login/login.component';

import { Navbar2Component } from './Components/navbar2/navbar2.component';
import { ProfileStudentComponent } from './Components/profile-student/profile-student.component';
import { RegisterComponent } from './Components/register/register.component';

const routes: Routes = [
  { path: 'navbar2', component: Navbar2Component},
  { path: 'contact', component: ContactComponent },
  { path: 'login', component:  LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'css-course', component: CssCourseComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'home', component: HomeComponent },
  { path: 'html-course', component: HtmlCourseComponent },
  { path: 'java-script-course', component: JavaScriptCourseComponent },
  { path: 'profile-student', component: ProfileStudentComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
