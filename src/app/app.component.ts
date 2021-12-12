import { Component } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { AuthserviceService } from './authservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string=""
  url:string=""
  constructor(private authService: SocialAuthService,
    private apiservice:AuthserviceService) { }
  
  title = 'auth';
  onSignIn(){
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((res:any)=>{
    // console.log(res)
      this.apiservice.googleSignIn(res.idToken).subscribe((res:any)=>{
        if(res.emailVerified==true)
        this.name=res.displayName
        this.url=res.photoUrl
        alert("Account Verified")
      }
      )
    });
  }
}
