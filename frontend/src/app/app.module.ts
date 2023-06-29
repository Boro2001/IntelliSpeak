import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule} from "@angular/fire/compat";
import { environment } from "../environments/environment";
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ConversationComponent } from './components/conversation/conversation.component';
import { ChatBubbleComponent } from './components/chat-bubble/chat-bubble.component';
import { NoPermissionComponent } from './components/no-permission/no-permission.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    VerifyEmailComponent,
    ForgotPasswordComponent,
    FileUploadComponent,
    DashboardComponent,
    ConversationComponent,
    ChatBubbleComponent,
    NoPermissionComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
