import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  constructor(private router: Router) {}
  onSubmit() {
    localStorage.setItem('auth', 'true')
    this.router.navigate(['/library']);
  }
  name = new FormControl('', Validators.required);

  get nameErrorMessage() {
    if (this.name.hasError('required')) {
      return 'Authorization key cannot be empty';
    }
    return '';
  }
}
