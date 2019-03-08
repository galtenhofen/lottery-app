import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ILeague} from "../../interfaces/league"



const Lobby_Data: ILeague[] = [
  {LeagueId:1, LeagueName: 'Chicago Assholes', StartDate: '1/1/2019', Entries: 75, Size: 1,EntryFee: 53, Prizes: 0},
  {LeagueId:2, LeagueName: 'Other Assholes', StartDate: '1/1/2019', Entries: 111, Size: 4, EntryFee: 44, Prizes: 0},
  {LeagueId:3, LeagueName: 'Iowa Ballsack', StartDate: '1/1/2019', Entries: 41, Size: 7, EntryFee: 19, Prizes: 0},
  {LeagueId:4, LeagueName: 'Coworkers', StartDate: '1/1/2019', Entries: 33, Size: 8, EntryFee: 7, Prizes: 0},
  {LeagueId:5, LeagueName: 'Powerballsack', StartDate: '5/1/2019', Entries: 22, Size: 0, EntryFee: 100, Prizes: 0},
  {LeagueId:6, LeagueName: 'Charlie is my hero', StartDate: '5/1/2019', Entries: 10, Size: 0, EntryFee: 100, Prizes: 0},
  {LeagueId:7, LeagueName: 'Laffy Taffe', StartDate: '5/1/2019', Entries: 0, Size: 0, EntryFee: 100, Prizes: 0},
]

@Component({
  selector: 'lobby-table',
  templateUrl: './lobby-table.component.html',
  styleUrls: ['./lobby-table.component.css']
})
export class LobbyTableComponent implements OnInit {
  displayedColumns: string[] = ['LeagueName', 'StartDate', 'Entries', 'Size', 'EntryFee', 'Prizes','EnterButton'];
  dataSource = new MatTableDataSource<ILeague>(Lobby_Data);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

  onRowClicked(leagueId: number){
    console.log("You clicked: " + leagueId)

  }
}
