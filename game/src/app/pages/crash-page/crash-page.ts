

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
import { PlayerService } from '../../core/services/player/player.service';
import { CommonUtilService } from '../../core/services/common/commonutil.service';
@Component({
  standalone: true,
  selector: 'app-crash-page',
  imports: [CommonModule, RouterLink, FormsModule, RouterModule, NgxPaginationModule], 
  templateUrl: './crash-page.html',
  styleUrl: './crash-page.css'
})
export class CrashPage implements OnDestroy {
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
  AllSlotGames: any;
 
  playerLoggedIn: boolean = false
  private storeSub!: Subscription;
  private closeSub!: Subscription;
  loginstate: string = '';

  TokenData: any;
  rocketManGameUrl: any;
  operatorId: any;
  responseLoader: boolean = false
  loaderKey = Date.now();

  p: number = 1;
  selectnum: number = 24;
  @ViewChild('alertHost', { read: ViewContainerRef }) alertHost!: ViewContainerRef;
  @ViewChild('gameIframe', { static: false }) gameIframe!: ElementRef;

  constructor(private store: Store<AppState>, private router: Router, private GameLauncherService: GameLauncherService, private GameCmsService: GameCmsService, private playerservice: PlayerService,
    private sanitizer: DomSanitizer, private componentFactoryResolver: ComponentFactoryResolver,public commonUtilSvc: CommonUtilService) {

  }
  ngOnInit() { 
  this.showLoader()
    // this.Games = this.TotalGames
    this.GameCmsService.getCrash().subscribe((resData) => {
      // this.commonUtilSvc.getPermission$().subscribe((res:any)=>{
      //   this.Games =  resData.filter((game:any)=> res[game.provider.toLowerCase()])
      // })
      // console.log(resData)

      this.Games = resData
      if (this.Games) {
      this.hideLoader()
      }
    })
    this.store.select("loginState").subscribe((loginState: LoginState) => {
      console.log(loginState.playerLoggedIn)
      if (loginState.playerLoggedIn) {
        this.playerLoggedIn = loginState.playerLoggedIn.loggedIn;
        if (this.playerLoggedIn) {
          this.GameCmsService.gamelunallproviders().subscribe((response: any) => {
            this.TokenData = response.token
            this.rocketManGameUrl = response.rocketManGameUrl 
            this.operatorId = response.operatorId
          })
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

  get paginatedGames() {
    return this.Games
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
  zepllienGame(game_id: any, gameName: any) {
    console.log(game_id)
    if (this.playerLoggedIn) {
      let gameUrl: any
      if (gameName == "Zepellin") {
        gameUrl = `https://bscpl1env01.kasoom.com/FlashRunGame/RunGenericGame.aspx?tableguid=8DA5238BE58541838D128466C5A6BF58&gameid=7001&token=${this.TokenData}&operatorID=3006292&language=en`
        console.log(gameUrl)
      } else {
        gameUrl = this.rocketManGameUrl + "tableguid=71CCEC005BA14E01A426AA1CFC45EAE2&token=" + this.TokenData + "&OperatorId=" + this.operatorId + "&language=en&cashierUrl=&homeUrl=&GameID=" + game_id + "&mode=real&bank=157"
      }
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(gameUrl);
      if (this.urlSafe) {
        this.moveToTop()
      }

    } else {
      this.showPopUp('LOGIN')
    }
  }
  onJDBGames(gType: any, mType: any) {
    if (this.playerLoggedIn) {
      this.GameCmsService.jdbLaunch(gType, mType).subscribe(((data: any) => {
        if (data.path) {
          this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(data.path);
          if (this.urlSafe) {
            this.moveToTop()
          }
        }
      }))
    } else {
      this.showPopUp("LOGIN")
    }
  }
  onaviatrix(data: any) {
    if(this.playerLoggedIn){

      let body = {
        "gameId": data.gameId,
        "provider": data.provider
      }
      this.playerservice.aviatrixnew(body).subscribe((data: any) => {
        if (data) {
          this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(data.url);
          if (this.urlSafe) {
            this.moveToTop()
          }
        }
      })
    }else{
      this.showPopUp("LOGIN")

    }

  }
  ngOnDestroy() {
    (window as any).$crisp?.push(["do", "chat:show"]);
  }
}
