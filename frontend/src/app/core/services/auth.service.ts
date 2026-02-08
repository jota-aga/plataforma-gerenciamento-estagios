import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

interface LoginDTO {
  email: string;
  password: string;
  role: "candidate" | "company";
}

interface RegisterDTO {
  name: string;
  email: string;
  password: string;
  cpf?: string;
  cnpj?: string;
  birthdate?: string;
  location?: string;
  website?: string;
  sector?: string;
  role: "candidate" | "company";
}

const mockedCandidateToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqb3NldWlsdG9uLnNpcXVlaXJhQGdtYWlsLmNvbSIsInJvbGUiOiJjYW5kaWRhdGUiLCJleHAiOjE1MTYyMzkwMjJ9.3BCH23-CtK4IVM7fzuUuN9nehF9ggEOp51pWkqGyFJo";

const mockedCompanyToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqb3NldWlsdG9uLnNpcXVlaXJhQGdtYWlsLmNvbSIsInJvbGUiOiJjb21wYW55IiwiZXhwIjoxNTE2MjM5MDIyfQ.YMg0RLFhXqC9UikY0EF90qzQ_WjX0r0wgFtNwakMXEc";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private TOKEN_KEY = "auth_token";

  login({ email, password, role }: LoginDTO) {
    if (email && password && role) {
      // No lugar de mockar, deveria ser uma chamada para o backend
      const token = role === "candidate" ? mockedCandidateToken : mockedCompanyToken;
      localStorage.setItem(this.TOKEN_KEY, token);
      return true;
    } else {
      return false;
    }
  }

  register({ name, email, password, cpf, cnpj, birthdate, location, website, sector, role }: RegisterDTO) {
    // Chamada para o backend
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
      const decodedToken = jwtDecode(token) as { role: "candidate" | "company" };
      return decodedToken.role;
    }

    return null;
  }
}