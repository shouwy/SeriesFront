import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatTabCard } from '../../../model/card/matTabCard';
import { MatPaginator, MatTableDataSource, PageEvent } from '@angular/material';

@Component({
  selector: 'app-table-card',
  templateUrl: './table-card.component.html',
  styleUrls: ['./table-card.component.scss']
})
export class TableCardComponent implements OnInit, OnChanges {

  @Input() public tableCard: MatTabCard;
  public displayedColumns: string[]
  public dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public pageIndex = 0;
  public pageSize = 25;
  public length: number;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.tableCard && (this.tableCard.displayColumns !== undefined || this.tableCard.displayColumns !== null)) {
      this.dataSource = new MatTableDataSource(this.tableCard.source);

      this.displayedColumns = this.tableCard.displayColumns.map(x => x.label);
      this.dataSource.paginator = this.paginator;

      this.dataSource.paginator.pageSize = this.pageSize;
      this.dataSource.paginator.pageIndex = this.pageIndex;

      this.dataSource.paginator.length = this.tableCard.source.length;
    }
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  updateProductsTable(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex + 1;

  }
}
