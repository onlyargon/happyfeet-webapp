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
import { AuthGuard } from './auth.guard';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ServiceInterceptor } from './helpers/service.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ToastrModule } from 'ngx-toastr';
import { AuthService } from './auth/auth.service';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { HeaderComponent } from './header/header.component';

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
    ReportComponent,
    HomeLayoutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MatCardModule,
    MatInputModule,
    MatTabsModule,
    MatButtonModule,
    MatRadioModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: ServiceInterceptor, multi: true },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
