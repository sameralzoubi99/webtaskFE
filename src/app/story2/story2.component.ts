import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-story2',
  templateUrl: './story2.component.html',
  styleUrls: ['./story2.component.sass'],
})
export class Story2Component implements OnInit {
  reactiveForm!: FormGroup;
  skills!: any;

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      personalDetails: new FormGroup({
        firstName: new FormControl(null, [
          Validators.required,
          this.noSpaceAllowed,
        ]),
        lastName: new FormControl(null, [
          Validators.required,
          this.noSpaceAllowed,
        ]),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      gender: new FormControl('male'),
      country: new FormControl('syria'),
      hobbies: new FormControl(null),
      skills: new FormArray([
        new FormControl(null),
        new FormControl(null),
        new FormControl(null),
      ]),
    });
    this.skills = (this.reactiveForm.get('skills') as FormArray).controls;

    this.reactiveForm.statusChanges.subscribe((value) => console.log(value));
  }

  onSubmit() {
    console.log(this.reactiveForm);
  }

  noSpaceAllowed(control: FormControl) {
    if (control.value != null && control.value.indexOf(' ') != -1) {
      return {
        noSpaceAllowed: true,
      };
    }
    return null;
  }
}
