import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Vaga } from '../users/candidate/model';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:8080/api/vagas';

  private getHeaders() {
    const token = typeof window !== 'undefined' ? localStorage.getItem('auth_token') : null;
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };
  }

  listar(): Observable<Vaga[]> {
    return this.http.get<Vaga[]>(this.apiUrl, this.getHeaders());
  }

  criar(vaga: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, vaga, this.getHeaders());
  }
}
