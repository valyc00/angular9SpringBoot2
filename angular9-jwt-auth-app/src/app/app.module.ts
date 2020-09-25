import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { HttpMockRequestInterceptor } from './interceptor.mock';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxSecurityModule } from 'ngx-security';


import { authInterceptorProviders } from './helper/auth.interceptor';


const providerscoll:any = [];

const vers: any= "sim";
// const vers: any= 'development';
console.log('version:'+vers);
if(vers==='sim'){
  providerscoll.push(

    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpMockRequestInterceptor,
      multi: true
    }

  );
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxSecurityModule
  ],
  providers: [authInterceptorProviders,providerscoll],
  bootstrap: [AppComponent]
})
export class AppModule { }
