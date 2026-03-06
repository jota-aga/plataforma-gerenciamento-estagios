import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AgendamentoRequestModel, EntrevistaModel } from './models/EntrevistaModel';

@Injectable({
  providedIn: 'root',
})
export class EntrevistaService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/api/entrevistas`;

  private getHeaders() {
    const token = globalThis.window === undefined ? null : localStorage.getItem('auth_token');
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };
  }

  agendarEntrevista(request: AgendamentoRequestModel): Observable<EntrevistaModel> {
    return this.http.post<EntrevistaModel>(this.apiUrl, request, this.getHeaders());
  }

  getEntrevistaPorCandidatura(candidaturaId: number): Observable<EntrevistaModel> {
    return this.http.get<EntrevistaModel>(`${this.apiUrl}/candidatura/${candidaturaId}`, this.getHeaders());
  }
}
