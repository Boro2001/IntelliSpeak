import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {VerifyEmailComponent} from "./components/verify-email/verify-email.component";
import {ForgotPasswordComponent} from "./components/forgot-password/forgot-password.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {FileUploadComponent} from "./components/file-upload/file-upload.component";
import {ConversationComponent} from "./components/conversation/conversation.component";
import {NoPermissionComponent} from "./components/no-permission/no-permission.component";
import {UserGuard} from "./guards/user.guard";

const routes: Routes = [
  {path: '', redirectTo:'file-upload', pathMatch:'full'},
  {path: 'login', component : LoginComponent},
  {path: 'dashboard', component : DashboardComponent},
  {path: 'register', component : RegisterComponent},
  {path: 'verify-email', component : VerifyEmailComponent},
  {path: 'forgot-password', component : ForgotPasswordComponent},
  {path: 'file-upload', component: FileUploadComponent},
  {path: 'conversation', component: ConversationComponent, canActivate: [UserGuard]},
  {path: 'no-permission', component: NoPermissionComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
