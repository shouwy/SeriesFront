import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AbstractService } from './AbstractService';
import { ElementModel } from '../model/element.model';

@Injectable()
export class ElementService extends AbstractService {

  private elementUrl =  this.apiUrl + environment.api.url.etatPersonal;

  public getElements(): Promise<any | ElementModel[]> {
    const listUrl = this.elementUrl + '/list';
    return this.list(listUrl).toPromise()
      .then( response => response as ElementModel[])
      .catch();
  }
}
