import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { RegisterComponent } from './Components/register/register.component';
import { ProfileStudentComponent } from './Components/profile-student/profile-student.component';
import { HtmlCourseComponent } from './Components/html-course/html-course.component';
import { CssCourseComponent } from './Components/css-course/css-course.component';
import { JavaScriptCourseComponent } from './Components/java-script-course/java-script-course.component';
import { ForumComponent } from './Components/forum/forum.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ProfileAdminComponent } from './Components/profile-admin/profile-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    ProfileStudentComponent,
    HtmlCourseComponent,
    CssCourseComponent,
    JavaScriptCourseComponent,
    ForumComponent,
    ContactComponent,
    ProfileAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
