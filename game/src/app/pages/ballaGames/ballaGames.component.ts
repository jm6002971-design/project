import { CommonModule } from '@angular/common';
import { Component, ComponentFactoryResolver, ElementRef, NgModule, OnDestroy, SecurityContext, ViewChild, ViewContainerRef } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { GameLauncherService } from '../../core/services/gameLauncher/game-launcher.service';
import { GameCmsService } from '../../core/services/games_cms/game-cms.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import * as loginActions from '../../core/appstates/loginstates/loginActions'
import { LoginComponent } from '../../auth/login/login';
import { AppState } from '../../core/appstates/appState';
import { Store } from '@ngrx/store';
import { LoginState } from '../../core/appstates/loginstates/loginState';
import { NgxPaginationModule } from 'ngx-pagination';


@Component({
  standalone: true,
  selector: 'app-ballaGames',
  imports: [CommonModule, RouterLink, FormsModule, RouterModule,NgxPaginationModule],
  templateUrl: './ballaGames.component.html',
  styleUrls: ['./ballaGames.component.css']
})
export class BallaGamesComponent implements OnDestroy {
  Games: any;
  private _urlSafe: SafeResourceUrl | null = null;
  get urlSafe(): SafeResourceUrl | null {
    return this._urlSafe;
  }
  set urlSafe(value: SafeResourceUrl | null) {
    this._urlSafe = value;
    if (value) {
      (window as any).$crisp?.push(["do", "chat:hide"]);
    } else {
      (window as any).$crisp?.push(["do", "chat:show"]);
    }
  }
  windows: Array<Window | null> = [];
  ProviderName: any = "habanero"
  itemsPerPageCount = 24;
  currentPageCount = 1;
  AllSlotGames: any;
 

  playerLoggedIn: boolean = false
  private storeSub!: Subscription;
  private closeSub!: Subscription;
  loginstate: string = '';

  TokenData: any;
  IndianManGameUrl: any;
  operatorId: any;
  @ViewChild('alertHost', { read: ViewContainerRef }) alertHost!: ViewContainerRef;
  @ViewChild('gameIframe', { static: false }) gameIframe!: ElementRef;
  gameIdIndie: any;
  indieUrl_1: any;
 p: number = 1;
  selectnum: number = 24;
  responseLoader: boolean = false
  loaderKey = Date.now();
  constructor(private store: Store<AppState>, private router: Router, private GameLauncherService: GameLauncherService, private GameCmsService: GameCmsService,
    private sanitizer: DomSanitizer, private componentFactoryResolver: ComponentFactoryResolver,) {

  }
  ngOnInit() {
   this.moveToTop()
   this.showLoader()
    // this.Games = this.TotalGames
    this.GameCmsService.IndieCasinoJson().subscribe((resData) => {
      console.log(resData)
      this.Games = resData.Games
      this.hideLoader();
    })
    this.store.select("loginState").subscribe((loginState: LoginState) => {
      console.log(loginState.playerLoggedIn)
      if (loginState.playerLoggedIn) {
        this.playerLoggedIn = loginState.playerLoggedIn.loggedIn;
        if (this.playerLoggedIn) {
          let games = sessionStorage.getItem('raj_wSession')
          if (games) {
            this.GameCmsService.indicasino(games).subscribe((response: any) => {
              this.TokenData = response
            })
          }
        }
      }
    });
  }
  showLoader() {
    this.loaderKey = Date.now(); // 🔥 force gif reload
    this.responseLoader = true;
  }
  hideLoader() {
    this.responseLoader = false;
  }
  showPopUp(value: string) {
    this.store.dispatch(new loginActions.ResetState());
    const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(
      LoginComponent
    );
    const hostViewContainerRef = this.alertHost;
    hostViewContainerRef.clear();
    const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);
    componentRef.instance.formState = value;
    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    });
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
  get totalPages() {
    return Math.ceil(this.Games.length / this.itemsPerPageCount);
  }

  get paginatedGames() {
    if(this.Games){
      const start = (this.currentPageCount - 1) * this.itemsPerPageCount;
  
      return this.Games.slice(start, start + this.itemsPerPageCount);

    }
  }

  nextPage() {
    if (this.currentPageCount < this.totalPages) this.currentPageCount++;
    document.body.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }

  prevPage() {
    if (this.currentPageCount > 1) this.currentPageCount--;
    document.body.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }

  navigates(route: any) {
    this.router.navigate([route])
  }
  toggleFullScreen(): void {
    console.log(this.gameIframe)
    if (!this.gameIframe) {
      console.warn('iframe is not yet available');
      return;
    }

    const iframe = this.gameIframe.nativeElement;
    if (!document.fullscreenElement) {
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if (iframe.mozRequestFullScreen) {
        iframe.mozRequestFullScreen();
      } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
      } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
      }
    } else {
      document.exitFullscreen();
    }
  }
  subtabClose() {
    this.urlSafe = null;
  }

  ballagamesLaunch(id: any, gameName: any) {
    // this.subindi(data)
    console.log(gameName)
    if (this.playerLoggedIn == true) {
      this.gameIdIndie = id;
      let sendToIndie = "gameId=" + id + '\&playerToken=' + this.TokenData["token"] + '\&site=' + 'rajpoker';
      console.log(sendToIndie)
      let indieUrl = this.TokenData["url"] + "/"
      // let indieUrl = "https://ballagames.prep4.live/"
      console.log(indieUrl)

      switch (id) {
        case id:
          this.indieUrl_1 = indieUrl + gameName + '?' + sendToIndie;
          console.log(this.indieUrl_1)
          this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.indieUrl_1)
          break;
      }
      console.log(this.urlSafe)
      if (this.urlSafe) {
        document.body.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        })
      }
    } else {
      this.showPopUp('LOGIN')
    }
  }
  ngOnDestroy() {
    (window as any).$crisp?.push(["do", "chat:show"]);
  }
}

