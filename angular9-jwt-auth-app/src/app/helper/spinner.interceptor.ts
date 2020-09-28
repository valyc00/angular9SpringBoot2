import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor, HttpEvent } from '@angular/common/http';
import { LoaderService } from '../services/spinner.service';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  private totalRequests = 0;

  constructor(private loaderService: LoaderService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.totalRequests++;
    // this.loadingService.setLoading(true);
    this.loaderService.isLoading.next(true);
    console.log('prima invio');

    return next.handle(request).pipe(
      finalize(() => {
        this.totalRequests--;
        if (this.totalRequests === 0) {
          this.loaderService.isLoading.next(false);
          console.log('dopo invio');
        }
      })
    );
  }
}
