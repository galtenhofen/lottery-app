import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

export interface Entry {
  LeagueName: string;
  StartDate: string;
  CompletedDate?: string;
  NumbersHit: number;
  Place: number;
  Winnings: number;
}

const ENTRY_DATA: Entry[] = [
  {LeagueName: 'Chicago Assholes', StartDate: '1/1/2019', CompletedDate: '4/1/2019', NumbersHit: 1,Place: 53, Winnings: 0},
  {LeagueName: 'Other Assholes', StartDate: '1/1/2019', CompletedDate: '4/1/2019', NumbersHit: 4, Place: 44, Winnings: 0},
  {LeagueName: 'Iowa Ballsack', StartDate: '1/1/2019', CompletedDate: '4/1/2019', NumbersHit: 7, Place: 19, Winnings: 0},
  {LeagueName: 'Coworkers', StartDate: '1/1/2019', CompletedDate: '4/1/2019', NumbersHit: 8, Place: 7, Winnings: 0},
  {LeagueName: 'Powerballsack', StartDate: '5/1/2019', CompletedDate: null, NumbersHit: 0, Place: 100, Winnings: 0},
  {LeagueName: 'Charlie is my hero', StartDate: '5/1/2019', CompletedDate: null, NumbersHit: 0, Place: 100, Winnings: 0},
  {LeagueName: 'Laffy Taffe', StartDate: '5/1/2019', CompletedDate: null, NumbersHit: 0, Place: 100, Winnings: 0},
];

@Component({
  selector: 'entry-table',
  templateUrl: './entry-table.component.html',
  styleUrls: ['./entry-table.component.css']
})
export class EntryTableComponent implements OnInit {
  displayedColumns: string[] = ['LeagueName', 'StartDate', 'CompletedDate', 'NumbersHit', 'Place', 'Winnings'];
  dataSource = new MatTableDataSource<Entry>(ENTRY_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }
}



