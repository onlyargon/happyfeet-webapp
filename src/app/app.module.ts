import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DesignComponent } from './design/design.component';
import { ProfileComponent } from './profile/profile.component';
import { ComHomeComponent } from './com-home/com-home.component';
import { ComProfileComponent } from './com-profile/com-profile.component';
import { ComDashboardComponent } from './com-dashboard/com-dashboard.component';
import { ReportComponent } from './report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    DesignComponent,
    ProfileComponent,
    ComHomeComponent,
    ComProfileComponent,
    ComDashboardComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
