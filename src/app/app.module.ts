
/*
 * Forum Software (Front End Validation Only) - 1.0 by @donqq (Badde Liyanage Don Dilanga) - https://nucuta.com, https://dilanga.com
 * bld@nucuta.com, bld@dilanga.com
 * License - https://raw.githubusercontent.com/donqq/Forum-Assignment/main/LICENSE
 */


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { TopicListComponent } from './topic-list/topic-list.component';
import { TopicPageComponent } from './topic-page/topic-page.component';
import { ReplyPageComponent } from './reply-page/reply-page.component';
import { ReplyListComponent } from './reply-list/reply-list.component';
import { ReplyPostPageComponent } from './reply-post-page/reply-post-page.component';
import { TopicPostPageComponent } from './topic-post-page/topic-post-page.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { BsDropdownModule } from 'ngx-bootstrap';
import { TopicsService } from './topics.service';
import { NavgivationServiceService } from './navgivation-service.service';
import { CoursesService } from './courses.service';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { FormsModule }   from '@angular/forms';
import { RepliesService } from './replies.service';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavigationMenuComponent,
    SignupPageComponent,
    LoginPageComponent,
    DashboardComponent,
    UserprofileComponent,
    TopicListComponent,
    TopicPageComponent,
    ReplyPageComponent,
    ReplyListComponent,
    ReplyPostPageComponent,
    TopicPostPageComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularMultiSelectModule,
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ButtonsModule.forRoot(),
    RouterModule.forRoot([
      {path : '', component: HomePageComponent},
      {path : 'Log-in', component: LoginPageComponent},
      {path : 'Sign-up', component: SignupPageComponent},
      {path : 'Dashboard', component: DashboardComponent},
      {path : 'Profile/:id', component: UserprofileComponent},
      {path : 'Profile', component: UserprofileComponent},
      {path : 'Topics/:id', component: TopicPageComponent},
      {path : 'Topics', component: TopicListComponent},
      {path : 'Topics-New', component: TopicPostPageComponent},
      {path : 'Reply-New', component: ReplyPostPageComponent},
      {path : 'Replies/:id', component: ReplyListComponent},
      {path : '**', component: NotFoundComponent}
    ])
  ],
  providers: [TopicsService,NavgivationServiceService,CoursesService,RepliesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
