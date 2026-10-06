import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerService } from '../../core/services/player/player.service';
import { CommonUtilService } from '../../core/services/common/commonutil.service';

@Component({
  selector: 'app-leaderboard-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leaderboard-page.html',
  styleUrl: './leaderboard-page.css'
})
export class LeaderboardPage implements OnInit {
  filteredSettings: any;
  showPlayerdata: any;
  tableloader: boolean = false;
  loadingRowId: string | null = null;
  activeRowId: string | null = null;

  // pagination
  currentPage: number = 1;
  pageSize: number = 10;
  totalPages: number = 0;
  paginatedPlayers: any[] = [];

  constructor(
    private playerservies: PlayerService,
    public commonUtilSvc: CommonUtilService
  ) {}

  ngOnInit() {
    this.playerservies.listleaderboard().subscribe((data: any) => {
      this.filteredSettings = data.settings.filter((x: any) =>
        x.visible && x.participants > 0
      );
      if (this.filteredSettings.length > 0) {
        const rawId = this.filteredSettings[0].id;
        this.activeRowId = rawId;
        let body = {
          settingsId: rawId
        };
        this.tableloader = true;
        this.playerservies.leader(body).subscribe((players: any) => {
          if (players) {
            this.tableloader = false;
            const key = Object.keys(players.settingsIdVsParticipants)[0];
            this.showPlayerdata = players.settingsIdVsParticipants[key];
            this.currentPage = 1;
            this.updatePagination();
          }
        });
      }
    });
  }

  getPlayers(id: string) {
    this.tableloader = true;
    this.loadingRowId = id;
    this.activeRowId = id;
    let body = { settingsId: id };
    this.playerservies.leader(body).subscribe((res: any) => {
      if (res) {
        this.tableloader = false;
        this.loadingRowId = null;
        const key = Object.keys(res.settingsIdVsParticipants)[0];
        this.showPlayerdata = res.settingsIdVsParticipants[key];
        this.currentPage = 1;
        this.updatePagination();
      }
    });
  }

  updatePagination() {
    if (!this.showPlayerdata || this.showPlayerdata.length === 0) {
      this.paginatedPlayers = [];
      return;
    }

    this.totalPages = Math.ceil(this.showPlayerdata.length / this.pageSize);
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedPlayers = this.showPlayerdata.slice(start, end);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }
}
