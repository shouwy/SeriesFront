import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { TypeModel } from '../model/type.model';
import { AbstractService } from './AbstractService';

@Injectable()
export class TypeService extends AbstractService {

  private typeUrl =  this.apiUrl + environment.api.url.type;

  public getTypes(): Promise<void | TypeModel[]> {
    const listUrl = this.typeUrl + '/list';
    return this.list(listUrl).toPromise()
      .then(response => response as TypeModel[])
      .catch();
  }
}
