import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Title } from '@angular/platform-browser';
import { TypeModel } from '../../model/type.model';
import { TypeService } from '../../service/type.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  public types: TypeModel[];
  public graphCard: any[];

  constructor(private titleService: Title, private typeService: TypeService) {}

  ngOnInit() {
    this.titleService.setTitle('DashBoard');

    this.typeService.getTypes().then((result: TypeModel[]) => {
      this.types = result;

      this.types.forEach((type: TypeModel) => {
        const card = {
          col: 1,
          row: 1,
          type: type,
          graphType: 'bar',
        };
        this.graphCard.push(card);
      });
    });
  }
}
