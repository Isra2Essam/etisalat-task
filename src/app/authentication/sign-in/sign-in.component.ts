import { Direction } from '@angular/cdk/bidi';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  hide = true;
  signinForm: FormGroup;
  textDir: Direction = 'ltr';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private translate: TranslateService,
    private authService: AuthenticationService
  ) {
    this.signinForm = this.formBuilder.group({
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

  navigateToSignup() {
    this.router.navigate(['/authentication/signup']);
  }
  onSubmit() {
    const email = this.signinForm.controls['email'].value;
    const password = this.signinForm.controls['password'].value;

    this.authService.signin(email, password).subscribe(
      (data) => {
        this.router.navigate(['/home-page']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
