import { JsonPipe, NgClass } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface IForm {
  name: FormControl<string>;
  age: FormControl<number>;
  email: FormControl<string>;
  birthDate?: FormControl<Date>;
}

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ ReactiveFormsModule, JsonPipe, NgClass ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {
  form = this.fb.group({
    name: this.fb.nonNullable.control(null, {validators: [Validators.required]}),
    email: this.fb.nonNullable.control(null, {validators: [Validators.required, Validators.email, Validators.minLength(5)]}),
    password: this.fb.nonNullable.control(null, {validators: [Validators.required, Validators.min(8)]}),
    age: this.fb.control(null),
  })

  formData = signal({} as IForm);

  constructor(private fb: FormBuilder) {}

  ngOnInit() {

  }

  onSubmit(data: any) {
    this.formData.set(data);
    console.log(this.formData());
    const formValue = this.form.value;
    (Object.keys(formValue) as (keyof typeof formValue)[]).forEach(key => {
      console.log(key, formValue[key]);
  });
    console.log(this.form.invalid);
  }

  getErrorStatus(controlName: keyof typeof this.form.controls) {
    const control = this.form.controls[controlName]
    return control.errors && control.touched;
  }
}
