import { AuthService } from './../services/auth.service';
import { TokenStorageService } from './../services/token-storage.service';
import { Component, OnInit } from '@angular/core';
import { NgxSecurityService } from 'ngx-security';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private security: NgxSecurityService
    ) { }

  ngOnInit(): void {
    this.checkLogin();
  }


  checkLogin(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      this.security.setAuthenticated(true);
      this.security.setRoles(this.roles);
    }
  }

  onSubmit() {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);



        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.security.setAuthenticated(true);
        this.security.setRoles(this.roles);
        this.checkLogin();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }
}
