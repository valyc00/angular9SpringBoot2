import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';
import { NgxSecurityService } from 'ngx-security';


import { AppConstants } from '../helper/app.constants';


@Injectable()
export class AuthExpiredInterceptor implements HttpInterceptor {
  constructor(
    private tokenStorageService:TokenStorageService,
    private security:NgxSecurityService,
    private router: Router
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(null, (err: HttpErrorResponse) => {
        if (err.status === 401 && err.url && !err.url.includes('api/account')) {
          console.log("url not authorized")
          // this.stateStorageService.storeUrl(this.router.routerState.snapshot.url);
          window.sessionStorage.setItem(AppConstants.PREV_URL, this.router.routerState.snapshot.url);
          this.tokenStorageService.signOut();
          this.security.reset();
          this.router.navigate(['login']);
        }



      })
    );
  }
}
