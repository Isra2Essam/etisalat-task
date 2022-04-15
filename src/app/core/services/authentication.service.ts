import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface AuthResponse{
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean
}
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return this.http.post<AuthResponse>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDh69wioyxCcIZsIBMKXACO9-Zo9ax1cQo',
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );
  }
  signin(email: string, password: string){
    return this.http.post<AuthResponse>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDh69wioyxCcIZsIBMKXACO9-Zo9ax1cQo',
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    )
  }
}
