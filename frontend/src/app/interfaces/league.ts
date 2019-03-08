export interface ILeague {
  LeagueId: number;
  LeagueName: string;
  StartDate: string;
  EndDate?: string;
  Entries: number;
  Size: number;
  EntryFee: number;
  NumbersHit?: number;
  NumberOfDrawings?: number;
  Prizes: number;
  Winnings?;
}
