import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm(): void {
    this.form = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(6), Validators.required]],
    });
  }

  sendForm() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    }
  }

  get invalidEmail() {
    return this.form.get('email')?.getError('email');
  }

  invalidField(field: string) {
    return (
      this.form.get(field)?.getError('required') &&
      this.form.get(field)?.touched
    );
  }

  get invalidMinLength() {
    return this.form.get('password')?.getError('minlength');
  }
}
