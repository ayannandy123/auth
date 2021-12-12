import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http: HttpClient) { }
  googleSignIn(token:string) {
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=
    AIzaSyBWDxBqBnZelGpUVg0JMWInJJxAPVb0Pcs`,
      { postBody: `id_token=${token}&providerId=google.com`, 
      requestUri:'https://ayannandy123.github.io', 
      returnIdpCredential: true, 
      returnSecureToken: true })

  }
}
