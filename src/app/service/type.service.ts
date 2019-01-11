import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { TypeModel } from '../model/type.model';

@Injectable()
export class TypeService {


  private url = environment.api.url;
  constructor(private httpClient: HttpClient) { }

  public getTypes(): Promise<void | TypeModel[]> {
    const typesUrl = this.url.host + this.url.port + this.url.type;
    return this.httpClient.get(typesUrl, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    }).toPromise()
      .then(response => response as TypeModel[])
      .catch();
  }
}
