import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { GameCmsService } from '../../core/services/games_cms/game-cms.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tournaments-page',
  imports: [CommonModule, RouterLink   , FormsModule, RouterModule, RouterModule,NgxPaginationModule],
  templateUrl: './tournaments-page.html',
  styleUrl: './tournaments-page.css'
})
export class TournamentsPage {
  Tournaments: any 
  responseLoader:boolean = true;
  loaderKey = Date.now();

   p: number = 1;
  selectnum: number = 24;
  constructor(private router: Router, private GameCmsService: GameCmsService,) {

  }
  ngOnInit() {
    this.showLoader();
    this.moveToTop()
    let body = {
      "filter": {
        "regular": true,
        "guaranteed": true,
        "freeroll": true
      },
      "paging": {
        "offset": 0,
        "limit": 100
      }
    }
    this.GameCmsService.PokerTournamentData(body).subscribe((resData:any) => {
      console.log(resData)
      if(resData && resData.success){     
        this.Tournaments =  resData.values
        this.hideLoader();
      }
    })
  }
  showLoader() {
    this.loaderKey = Date.now(); // 🔥 force gif reload
    this.responseLoader = true;
  }
  hideLoader() {
    this.responseLoader = false;
  }
  navigates(route: any) {
    this.router.navigate([route])
  }
    moveToTop() { 
    document.body.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });           
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  cleanDate(dateStr: string): Date {
    return new Date(dateStr.replace('[UTC]', ''));
  }
  
}
