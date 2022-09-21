import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComplaintsComponent } from './admin-complaints/admin-complaints.component';
import { AdminPlansComponent } from './admin-plans/admin-plans.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { ContactComponent } from './contact/contact.component';
import { DongleComponent } from './dongle/dongle.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PostpaidComponent } from './postpaid/postpaid.component';
import { PrepaidComponent } from './prepaid/prepaid.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ServicesComponent } from './services/services.component';
import { AuthGuard } from './shared/auth.guard';
import { RoleGuard } from './shared/role.guard';
import { UserUpdateProfileComponent } from './user-update-profile/user-update-profile.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [

  {path: 'about', component: AboutComponent},

  {path: 'prepaid', component: PrepaidComponent,canActivate:[AuthGuard]},

  {path: 'contact', component: ContactComponent},
  
  {path: 'services', component: ServicesComponent,canActivate:[AuthGuard]},
  
  {path: 'home', component: HomeComponent,canActivate:[AuthGuard]},
  {path: 'login', component: LoginComponent},

  {path: 'adminusers', component: AdminUsersComponent,canActivate:[RoleGuard]},
  {path: 'adminplans', component: AdminPlansComponent,canActivate:[RoleGuard]},
  {path: 'admincomplaints', component: AdminComplaintsComponent,canActivate:[RoleGuard]},
  {path: 'postpaid', component: PostpaidComponent,canActivate:[AuthGuard]},
  {path: 'dongle', component: DongleComponent,canActivate:[AuthGuard]},
  {path: 'profile', component: ProfileComponent,canActivate:[AuthGuard]},
  

  {path: 'register', component: RegisterComponent},
  {path: 'userupdateprofile', component:UserUpdateProfileComponent,canActivate:[AuthGuard]},
  {path: 'welcome', component: WelcomeComponent},
  {path: '', component: WelcomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
