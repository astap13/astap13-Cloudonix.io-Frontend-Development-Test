import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
onSubmit() {
throw new Error('Method not implemented.');
}
  name = new FormControl('', Validators.required);

  get nameErrorMessage() {
    if (this.name.hasError('required')) {
      return 'Authorization key cannot be empty';
    }
    return '';
  }
}
