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
import { environment } from '../../../environments/environment';
import { PlayerService } from '../../core/services/player/player.service';
import { MessageService } from '../../reusables/message/message.service';
import { CommonUtilService } from '../../core/services/common/commonutil.service';


@Component({
  standalone: true,
  selector: 'app-live-casino-page',
  imports: [CommonModule, RouterLink, FormsModule, RouterModule, NgxPaginationModule],
  templateUrl: './live-casino-page.html',
  styleUrl: './live-casino-page.css'
})
export class LiveCasinoPage implements OnDestroy {
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
  ProviderName: any = "Ezugi"
  // ProviderName: any = "Ezugi"
  AllSlotGames: any;
  playerLoggedIn: boolean = false
  private storeSub!: Subscription;
  private closeSub!: Subscription;
  loginstate: string = '';
  EzugiGm: any;
  EvoGm: any;
  p: number = 1;
  selectnum: number = 24;
  @ViewChild('alertHost', { read: ViewContainerRef }) alertHost!: ViewContainerRef;
  @ViewChild('gameIframe', { static: false }) gameIframe!: ElementRef;
  torrogames: any
  pragmaticLivecasino: any
  constructor(private store: Store<AppState>, private router: Router, private playerserive: PlayerService, private messageservice: MessageService, private GameCmsService: GameCmsService,
    private sanitizer: DomSanitizer, private componentFactoryResolver: ComponentFactoryResolver, public commonUtilSvc: CommonUtilService) {

  }
  ngOnInit() {
    this.moveToTop()
    // this.GameCmsService.liveCasinoGames().subscribe((resData) => {
    //   this.EzugiGm = resData.newlivecasino.filter((ele: any) => ele.provider === "Ezugi") ?? [];
    //   this.EvoGm = resData.newlivecasino.filter((ele: any) => ele.provider === "Evolution") ?? []; 
    //   this.Games = this.EzugiGm
    // })


    // this.playerserive.torrogames().subscribe((data: any) => {
    //   console.log(data, "FFFFFFFFFFFFFFFFFFFFFFFFF")
    //   this.torrogames = data.filter((game: any) => game.provider == "Ezugi");
    //   // this.Games = this.torrogames 
    // })

    this.torrobtn("Evolution")

    this.store.select("loginState").subscribe((loginState: LoginState) => {
      console.log(loginState.playerLoggedIn)
      if (loginState.playerLoggedIn) {
        this.playerLoggedIn = loginState.playerLoggedIn.loggedIn;
      }
    });
    this.connect();

  }
  connect() {
    const bodydata: any[] = [];
    const ws = new WebSocket('wss://dga.pragmaticplaylive.net/ws');

    ws.onopen = () => {
      ws.send(JSON.stringify({
        type: 'available',
        casinoId: "ppcda00000006808",
        lobbyId: "103"
      }));
    };

    const tableIds: any[] = [];

    const handleTrade = (trade: any) => {
      if (trade.hasOwnProperty('tableKey')) {
        trade.tableKey.forEach((key: string) => {
          ws.send(JSON.stringify({
            type: 'subscribe',
            key,
            currency: 'USD',
            casinoId: 'ppcda00000006808',
            lobbyId: '103'
          }));
        });
      }

      if (trade.hasOwnProperty('tableId') && !tableIds.includes(trade.tableId)) {
        tableIds.push(trade.tableId);
        bodydata.push(trade);


        this.pragmaticLivecasino = bodydata
        

      }
    };

    ws.onmessage = (e) => {
      const trade = JSON.parse(e.data);
      handleTrade(trade);
    };

    ws.onclose = (e) => {
      console.log('Socket closed, reconnect in 1 min', e.reason);
    };

    ws.onerror = (err) => {
      console.error('Socket error:', err);
      ws.close();
    };

    // Auto reconnect 
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
  torrobtn(providerName: any) {
    this.ProviderName = providerName
    this.torrogames = [];
    this.playerserive.torrogames().subscribe((data: any) => {
      this.torrogames = data.filter((game: any) => game.provider == providerName);

    })
  }
getGameImage(game: any, i: number): string {
  if (game.provider === 'Evolution' && i < 9) {
    return `assets/GameImgs/evolution_new_games/${game.id}.jpg`;
  }

  return game.images;
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
    var session = sessionStorage.getItem('closeGameSession');
    if (session) {
      let body = {
        gameSession: session
      }
      this.playerserive.closesession(body).subscribe((data: any) => {
        console.log(data);
      })
      this.playerserive.gameclose(session).subscribe((data: any) => {
        console.log(data)
      })
    }
  }
  providerChange(Provider: any) {
    this.ProviderName = Provider
    this.p = 1
    if (Provider == "Ezugi") {
      this.Games = this.EzugiGm
    } else {
      this.Games = this.EvoGm
    }
  }
  liveDealer(gname: any, gameName: any) {
    if (this.playerLoggedIn == true) {
      let wsessionId = sessionStorage.getItem('raj_wSession')
      this.GameCmsService.getEzugi(wsessionId).subscribe((liveDealerdata: any) => {
        if (liveDealerdata.EZUGI_TOKEN) {
          let ezugiLunch = liveDealerdata.EZUGI_GAME_URL + 'token=' + liveDealerdata.EZUGI_TOKEN + '&operatorId=' + liveDealerdata.EZUGI_OPERATOR_ID + '&clientType=html5&language=en&selectGame=' + gname;
          console.log(ezugiLunch)
          this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(ezugiLunch);
          if (this.urlSafe) {
            this.moveToTop()
          }
        }
      });
    } else if (this.playerLoggedIn == false) {
      this.showPopUp('LOGIN')
    }
  }
  evogamesin(gameId: any, gameName: any) {
    if (this.playerLoggedIn == true) {
      let wesessioid = sessionStorage.getItem('raj_wSession')
      this.GameCmsService.getEzugi(wesessioid).subscribe((data: any) => {
        if (data.EZUGI_TOKEN) {
          let evourl = `${data.EZUGI_GAME_URL}token=${data.EZUGI_TOKEN}&operatorId=${data.EZUGI_OPERATOR_ID}&[language=en&clientType=html5&openTable=${gameId}&homeUrl=${environment.baseUrl}]`

          console.log(evourl)
          this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(evourl);
          if (this.urlSafe) {
            this.moveToTop()
          }
        }
      })
    } else {
      this.showPopUp('LOGIN')
    }
  }
  torromethod(game: any) {
    if (this.playerLoggedIn) {
      const data = localStorage.getItem('providerStatus');

      if (data) {
        const providerData = JSON.parse(data);
        if (providerData.status == false) {
          this.messageservice.success("Success", providerData.message)
          return;
        }
      }
      let body = {
        "gameId": game.game_code,
        "provider": game.provider
      }
      this.playerserive.torrolaunch(body).subscribe((data: any) => {
        if (data) {
          sessionStorage.setItem('closeGameSession', data.token);
          if (data.url) {
            this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(data.url);
            if (this.urlSafe) {
              this.moveToTop()
            }

          } else {
            this.messageservice.error("Failed", data.message)
          }
        }
      })
    } else {
      this.showPopUp('LOGIN')

    }
  }
  Pragmaticgamesres(name: any, id: any) {
    if (this.playerLoggedIn == true) {

      this.playerserive.getPragmaticHit(id).subscribe((data: any) => this.pragmaticres12(data))
    } else if (this.playerLoggedIn == false) {
      this.showPopUp("LOGIN");
    }
  }
  pragmaticres12(data: any) {
    console.log(data)
    if (data) {
      let url = data.gameURL
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(url)
      if (this.urlSafe) {
        this.moveToTop()

      }

    }
  }
  gvproviderapi(data: any) {
    if(!this.playerLoggedIn) return this.showPopUp('LOGIN')
    let body = {
      "gameId": data.id,
      "provider": data.provider + "GV",
      "language": "en"
    }
    this.playerserive.gvproviderapi(body).subscribe((data: any) => {
      if (data) {
        sessionStorage.setItem('closeGameSession', data.token);

        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(data.url);
        if (this.urlSafe) {
          this.moveToTop()
        }
      }
    })

  }
  vivogameLaunch(game: any) {
    if (this.playerLoggedIn) {
      this.playerserive.gamelunallvivogaming().subscribe((response: any) => {
        // sessionStorage.setItem('closeGameSession', response.TOKEN);

        const launchUrl = response.VIVO_GAME_LAUNCH_URL.split("selectedGame=")[0] + `selectedGame=${game.gameId}` + response.VIVO_GAME_LAUNCH_URL.split("selectedGame=All")[1];
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(launchUrl);
        if (this.urlSafe) {
          this.moveToTop()
        }

      })

    } else {
      this.showPopUp('LOGIN');

    }
  }
  ngOnDestroy() {
    (window as any).$crisp?.push(["do", "chat:show"]);
  }
}
