import { Direction } from '@angular/cdk/bidi';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  hide = true;
  signupForm: FormGroup;
  textDir: Direction = 'ltr';
  errorMsg: any;
  
  constructor(
    private formBuilder: FormBuilder,
    private translate: TranslateService,
    private router: Router,
    private authService: AuthenticationService
  ) {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      if (event.lang == 'ar') {
        this.textDir = 'rtl';
      } else {
        this.textDir = 'ltr';
      }
    });
  }
  getErrorMessage() {
    if (
      this.signupForm.controls['email'].hasError('required') ||
      this.signupForm.controls['password'].hasError('required')
    ) {
      return 'You must enter a value';
    }

    return this.signupForm.controls['email'].hasError('email')
      ? 'Not a valid email'
      : '';
  }

  onSubmit() {
    const email = this.signupForm.controls['email'].value;
    const password = this.signupForm.controls['password'].value;
    this.authService.signup(email, password).subscribe(
      (data) => {
        this.router.navigate(['/home-page']);
      },
      (error) => {
        this.errorMsg = error['error']['error']['message'];
      }
    );
  }
}
