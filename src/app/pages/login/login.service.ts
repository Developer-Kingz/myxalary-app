import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import { catchError } from "rxjs";
import { throwError } from "rxjs";


interface AuthResponseData{
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered: boolean;
}

@Injectable({providedIn: 'root'})
export class AuthService{
    constructor(private http: HttpClient) {}

    login(email: string, password: string){
        return this.http.post<AuthResponseData>('https://jsonplaceholder.typicode.com/posts',
        {
            email: email,
            password: password,
            returnSecureToken: true
        })
        .pipe(catchError(errorRes =>{
            let errorMessage = 'An unknown error occured'
            if(!errorRes.error || !errorRes.error.error){
               return throwError(errorMessage);
            }
            switch(errorRes.error.error.message){
                case 'EMAIL_EXIST':
                 errorMessage = 'This email already exists';
                 break;
                 case 'EMAIL_NOT_FOUND':
                    errorMessage = "This emaildoes not exist"
                 break;
                 case 'INVALID_PASSWORD':
                    errorMessage = "This password is not correct"
             }
             return throwError(errorMessage)
        }));
    }
}