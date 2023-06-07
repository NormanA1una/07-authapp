import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-auth-button-logout',
  templateUrl: './auth-button-logout.component.html',
  styleUrls: ['./auth-button-logout.component.css'],
})
export class AuthButtonLogoutComponent {
  constructor(
    @Inject(DOCUMENT) public document: Document,
    public auth: AuthService
  ) {}
}
