import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
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
import { CommonModule } from '@angular/common';
import { LoaderService } from './services/spinner.service';
import { SpinnerInterceptor } from './helper/spinner.interceptor';
import { NgxSecurityModule } from 'ngx-security';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


import { authInterceptorProviders } from './helper/auth.interceptor';
import { AuthExpiredInterceptor } from './helper/auth-expired.interceptor';
import { RubricaComponent } from './rubrica/rubrica.component';


const providerscoll:any = [];

// const vers: any= "nosim";
const vers: any= "nosim";
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
    RubricaComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxSecurityModule,
    CommonModule 
  ],
  providers: [authInterceptorProviders,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    LoaderService, {
    provide: HTTP_INTERCEPTORS,
    useClass: SpinnerInterceptor,
    multi: true
  },{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthExpiredInterceptor,
    multi: true
  },providerscoll],
  bootstrap: [AppComponent]
})
export class AppModule { }
