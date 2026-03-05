import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { tap } from 'rxjs';
import { environment } from '../../../environments/environment';

interface JwtPayload {
  sub: string;
  role: string;
}

interface LoginDTO {
  email: string;
  password: string;
}

interface RegisterDTO {
  name?: string;
  email: string;
  password: string;
  cpf?: string;
  cnpj?: string;
  birthdate?: string;
  location?: string;
  website?: string;
  sector?: string;
  role: 'candidate' | 'company';
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';

  constructor(private readonly http: HttpClient) {}

  login({ email, password }: LoginDTO) {
    return this.http
      .post<{ token: string }>(`${environment.apiUrl}/auth/login`, { email, password })
      .pipe(
        tap({
          next: (res) => {
            localStorage.setItem(this.TOKEN_KEY, res.token);
          },
          error: () => {
            console.error('Erro ao autenticar');
          },
        })
      );
  }

  register({
    //name,
    email,
    password,
    //cpf,
    //cnpj,
    //birthdate,
    //location,
    //website,
    //sector,
    role,
  }: RegisterDTO) {
    return this.http.post(`${environment.apiUrl}/auth/register`, {
      // name,
      email,
      password,
      // cpf,
      //cnpj,
      //birthdate,
      //location,
      //website,
      //sector,
      role,
    });
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  getToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  getRole() {
    const token = this.getToken();
    if (token) {
      const decodedToken = jwtDecode<JwtPayload>(token);
      return decodedToken.role;
    }

    return null;
  }

  getEmail() {
    const token = this.getToken();
    if (token) {
      const decodedToken = jwtDecode<JwtPayload>(token);
      return decodedToken.sub;
    }

    return null;
  }
}
