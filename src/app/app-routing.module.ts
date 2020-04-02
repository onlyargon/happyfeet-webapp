import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { DesignComponent } from './design/design.component';
import { ReportComponent } from './report/report.component';
import { ComDashboardComponent } from './com-dashboard/com-dashboard.component';
import { ComProfileComponent } from './com-profile/com-profile.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "profile",
        component: ProfileComponent
      },
      {
        path: "",
        redirectTo: "/profile",
        pathMatch: "full"
      },
      {
        path: "contact",
        component: ContactComponent
      },
      {
        path: "",
        redirectTo: "/contact",
        pathMatch: "full"
      },
      {
        path: "design",
        component: DesignComponent
      },
      {
        path: "",
        redirectTo: "/design",
        pathMatch: "full"
      },
      {
        path: "report",
        component: ReportComponent
      },
      {
        path: "",
        redirectTo: "/report",
        pathMatch: "full"
      },
      {
        path: "about",
        component: AboutComponent
      },
      {
        path: "",
        redirectTo: "/about",
        pathMatch: "full"
      },


      {
        path: "com-dashboard",
        component: ComDashboardComponent
      },
      {
        path: "",
        redirectTo: "/com-dashboard",
        pathMatch: "full"
      },
      {
        path: "com-profile",
        component: ComProfileComponent
      },
      {
        path: "",
        redirectTo: "/com-profile",
        pathMatch: "full"
      },
    ]
  },
  {
    path: "auth",
    component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
