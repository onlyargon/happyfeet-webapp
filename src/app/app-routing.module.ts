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
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ComHomeComponent } from './com-home/com-home.component';
import { ComCustOrdersComponent } from './com-cust-orders/com-cust-orders.component';
import { CompanyListComponent } from './company-list/company-list.component';


const routes: Routes = [
  {
    path: "",
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "home",
        component: HomeComponent
      },
      {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
      },
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
        path: "my-orders",
        component: MyOrdersComponent
      },
      {
        path: "",
        redirectTo: "/my-orders",
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
        path: "company-list",
        component: CompanyListComponent
      },
      {
        path: "",
        redirectTo: "/company-list",
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
      {
        path: "com-home",
        component: ComHomeComponent
      },
      {
        path: "",
        redirectTo: "/com-home",
        pathMatch: "full"
      },
      {
        path: "order-reqs",
        component: ComCustOrdersComponent
      },
      {
        path: "",
        redirectTo: "/order-reqs",
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
