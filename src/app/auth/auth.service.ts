import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface AuthResponseData {
    // kind:string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;

}

interface AuthSignInResponseData {
    // kind:string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered:string;

}

@Injectable({ providedIn: 'root' })
export class AuthService {

    constructor(private http: HttpClient) { }

    signup(email: string, password: string) {
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBsabPqx1dUdaQk2RBF2dc9m2wO96ozsYg',
            {
                email: email,
                password: password,
                returnSecureToken: true,
            })

    }

    signin(email: string, password: string) {
        return this.http.post<AuthSignInResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBsabPqx1dUdaQk2RBF2dc9m2wO96ozsYg',
            {
                email: email,
                password: password,
                returnSecureToken: true,
            })

    }

}