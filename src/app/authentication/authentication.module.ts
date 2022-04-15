import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { CoreModule } from '../core/core.module';
import { HeaderComponent } from './header/header.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { HomePageRoutingModule } from '../home-page/home-page-routing.module';

@NgModule({
  declarations: [
    SignInComponent,
    HeaderComponent,
    SignUpComponent,
  
  ],
  imports: [
    CommonModule,
    CoreModule,
    AuthenticationRoutingModule,
    HomePageRoutingModule
    
  ]
})
export class AuthenticationModule { }
