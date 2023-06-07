import { Component } from '@angular/core';

import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-auth-button-login',
  templateUrl: './auth-button-login.component.html',
  styleUrls: ['./auth-button-login.component.css'],
})
export class AuthButtonLoginComponent {
  constructor(public auth: AuthService) {}
}
