import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http:HttpClient) { }
  signingUpForm(email:string ,password:string){
    return this.http.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCbqi_XkoW6JeHPf58-pmoHrS1PX7EWlt0',{
     email:email,
     password:password,
     returnSecureToken:true
    }).pipe(catchError(restError =>{
     let errorMessage='An unknown error occured!';
     if(restError.error.error.message =='EMAIL_EXISTS'){
       errorMessage ='This email exists already';
     }
     return throwError(errorMessage);
     
    }))
   }
}
