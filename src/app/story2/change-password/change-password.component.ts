import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.sass'],
})
export class ChangePasswordComponent implements OnInit {
  reactiveForm!: FormGroup;

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      password: new FormControl(null, [
        Validators.minLength(8),
        // this.validateUpperCase.bind(this),
      ]),
    });
  }

  passwordValidation() {
    // console.log(password);
    // const count: number = (password.match(new RegExp('@', 'g')) || []).length;
    // console.log(`Substring @ found ${count} times.`);
    console.log(this.reactiveForm);
  }

  validateUpperCase(control: FormControl) {
    if (control.value != null && control.value.indexOf('[A-Z]') != -1) {
      return {
        validateUpperCase: true,
      };
    }
    return null;
  }
}
