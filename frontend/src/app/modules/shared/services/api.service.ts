import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly url = 'localhost:8085/social-media/'

  public constructor(
    private readonly httpClient: HttpClient
  ) { }

  public get<T = any>(endpoint: string): Observable<T> {
    return this.httpClient.get<T>(this.prepareUrl(endpoint));
  }

  public post<TResponse = any, TBody = any>(endpoint: string, body: TBody): Observable<TResponse> {
    return this.httpClient.post<TResponse>(this.prepareUrl(endpoint), body);
  }

  private prepareUrl(endpoint: string): string {
    return `${this.url}/${endpoint}`;
  }
}
