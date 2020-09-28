import { TokenStorageService } from './services/token-storage.service';
import { Component, OnInit } from '@angular/core';
import { NgxSecurityService } from 'ngx-security';
import { LoaderService } from './services/spinner.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;

  constructor(private tokenStorageService: TokenStorageService,
    private security: NgxSecurityService,
    public loaderService:LoaderService
    ) {

  }
  ngOnInit(): void {

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn){
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.security.setAuthenticated(true);
      this.security.setRoles(this.roles);

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    this.security.reset();
    window.location.reload();
  }

}
