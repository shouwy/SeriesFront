import { Injectable } from '@angular/core';
import { AbstractService } from './AbstractService';
import { environment } from '../../environments/environment';
import { EtatModel } from '../model/etat.model';

@Injectable()
export class EtatService extends AbstractService {

  private etatUrl =  this.apiUrl + environment.api.url.etat;

  public getEtats(): Promise<any | EtatModel[]> {
    const listUrl = this.etatUrl + '/list';
    return this.list(listUrl).toPromise()
      .then( response => response as EtatModel[])
      .catch();
  }
}
