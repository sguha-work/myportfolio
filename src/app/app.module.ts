import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { MenuComponent } from './components/menu/menu.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { BlogComponent } from './components/blog/blog.component';
import { WorkComponent } from './components/work/work.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { CopyrightComponent } from './components/copyright/copyright.component';

import {DatabaseService} from './services/database.service';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    MenuComponent,
    UserInfoComponent,
    SocialLinksComponent,
    BlogComponent,
    WorkComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ServicesComponent,
    AboutComponent,
    HomeComponent,
    CopyrightComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
  ],
  providers: [
    DatabaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
