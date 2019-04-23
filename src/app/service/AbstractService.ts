import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class AbstractService {
  protected apiUrl = environment.api.host + environment.api.port + environment.api.contextPath;

  constructor(protected httpClient: HttpClient) { }

  protected list(url: string) {
    return this.httpClient.get(url, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    });
  }
}
