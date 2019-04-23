import { Component, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Title } from '@angular/platform-browser';
import { TypeModel } from '../../model/type.model';
import { TypeService } from '../../service/type.service';
import { EtatModel } from '../../model/etat.model';
import { EtatPersonnelModel } from '../../model/etatPersonnel.model';
import { EtatService } from '../../service/etat.service';
import { EtatPersonalService } from '../../service/etat-personal.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { GraphCard } from '../../model/card/graphCard';
import { MatTabCard } from '../../model/card/matTabCard';
import { MatTableColumn } from '../../model/matTableColumn';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  public graphCard: GraphCard[];
  public matTabCard: MatTabCard[];

  constructor(private titleService: Title, private typeService: TypeService, private etatService: EtatService,
              private etatPersService: EtatPersonalService) {}

  ngOnInit() {
    this.titleService.setTitle('DashBoard');

    this.matTabCard = [];
    this.initTypes();
    this.initEtats();
    this.initEtatPers();
  }

  private initTypes() {
    this.typeService.getTypes().then((result: TypeModel[]) => {
      const typesCard: MatTabCard = {
        card: {
          title: 'Types',
          col: 1,
          row: 1
        },
        source: result,
        displayColumns: [{
          label: 'id',
          header: 'Identifiant',
          valueName:  row => `${row.id}`
        }, {
          label: 'name',
          header: 'Nom',
          valueName: row => `${row.typeName}`
        }, ],
      };

      this.matTabCard.push(typesCard);

      result.forEach((type: TypeModel) => {
        const card: GraphCard = {
          card: {
            title: type.typeName,
            col: 1,
            row: 1
          },
          type: type,
          graphType: 'bar',
        };
        this.graphCard.push(card);
      });
    });
  }

  private initEtats() {
    this.etatService.getEtats().then((result: EtatModel[]) => {
      const etatCard: MatTabCard = {
        card: {
          title: 'Etat',
          col: 1,
          row: 1
        },
        source: result,
        displayColumns: [{
          label: 'id',
          header: 'Identifiant',
          valueName:  row => `${row.id}`
        }, {
          label: 'name',
          header: 'Nom',
          valueName: row => `${row.etatName}`
        }, ],
      };

      this.matTabCard.push(etatCard);
    });
  }

  private initEtatPers() {
    this.etatPersService.getEtatsPersonal().then((result: EtatPersonnelModel[]) => {
      const etatPersCard: MatTabCard = {
        card: {
          title: 'Etat Personnel',
          col: 1,
          row: 1
        },
        source: result,
        displayColumns: [{
          label: 'id',
          header: 'Identifiant',
          valueName:  row => `${row.id}`
        }, {
          label: 'name',
          header: 'Nom',
          valueName: row => `${row.etatPersName}`
        }, ],
      };

      this.matTabCard.push(etatPersCard);
    });
  }
}
