import { Injectable } from '@angular/core';
import { AbstractService } from './AbstractService';
import { environment } from '../../environments/environment';
import { EtatPersonnelModel } from '../model/etatPersonnel.model';

@Injectable()
export class EtatPersonalService extends AbstractService {

  private etatUrl =  this.apiUrl + environment.api.url.etatPersonal;

  public getEtatsPersonal(): Promise<any | EtatPersonnelModel[]> {
    const listUrl = this.etatUrl + '/list';
    return this.list(listUrl).toPromise()
      .then( response => response as EtatPersonnelModel[])
      .catch();
  }
}
