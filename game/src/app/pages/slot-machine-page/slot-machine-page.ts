import { CommonModule } from '@angular/common';
import { Component, ComponentFactoryResolver, ElementRef, NgModule, OnDestroy, SecurityContext, ViewChild, ViewContainerRef } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { GameLauncherService } from '../../core/services/gameLauncher/game-launcher.service';
import { GameCmsService } from '../../core/services/games_cms/game-cms.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LoginState } from '../../core/appstates/loginstates/loginState';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/appstates/appState';
import * as loginActions from '../../core/appstates/loginstates/loginActions'
import { LoginComponent } from '../../auth/login/login';
import { Subscription } from 'rxjs';
import { NgxPaginationModule } from 'ngx-pagination';
import { environment } from '../../../environments/environment';
import { PlayerService } from '../../core/services/player/player.service';
import { MessageService } from '../../reusables/message/message.service';
import { CommonUtilService } from '../../core/services/common/commonutil.service';


@Component({
  standalone: true,
  selector: 'app-slot-machine-page',
  imports: [CommonModule, RouterLink, FormsModule, RouterModule, NgxPaginationModule],
  templateUrl: './slot-machine-page.html',
  styleUrl: './slot-machine-page.css'
})
export class SlotMachinePage implements OnDestroy {
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


  ProviderList: any;
  ProviderName: any = "habanero"
  itemsPerPageCount = 24;
  currentPageCount = 1;
  AllSlotGames: any;
  playerLoggedIn: boolean = false
  private storeSub!: Subscription;
  private closeSub!: Subscription;
  loginstate: string = '';
  @ViewChild('alertHost', { read: ViewContainerRef }) alertHost!: ViewContainerRef;
  @ViewChild('gameIframe', { static: false }) gameIframe!: ElementRef;
  HBslotsdata: any;
  tokendata: any;
  keyname: any;
  operatorId: any;
  rocketManGameUrl: any;
  TokenData: any;
  platipusGameUrl: any;
  arrowEdgeGameUrl: any;
  tomhornGameUrl: any;
  this: any;
  token: any;
  serverId: any;
  homeUrl: any;
  currency: any;
  men5Url: any;
  Gameloader: boolean = true;
  responseLoader: boolean = false;
  loaderKey = Date.now();

  loadedGames: any[] = [];   // Games that show on screen
  initialLoad = 40;
  loadBatch = 20;            // Load 20 per scroll
  isLoadingMore = false;     // loader for scroll
  CurrentDomain: any = environment.Domain
  constructor(private store: Store<AppState>, private router: Router, private GameLauncherService: GameLauncherService, private playerservice: PlayerService, private messageservice: MessageService,
    private GameCmsService: GameCmsService, private sanitizer: DomSanitizer, private componentFactoryResolver: ComponentFactoryResolver, public commonUtilSvc: CommonUtilService) {

  }
  ngOnInit() {
    this.showLoader();
    window.addEventListener('scroll', () => {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 50) {
        this.loadMoreGames();
      }
    });
    this.moveToTop()
    this.store.select("loginState").subscribe((loginState: LoginState) => {
      console.log(loginState.playerLoggedIn)
      if (loginState.playerLoggedIn) {
        this.playerLoggedIn = loginState.playerLoggedIn.loggedIn;
        if (this.playerLoggedIn) {
          this.GameCmsService.gamelunallproviders().subscribe((response: any) => {
            this.vivoSession(response)
          })
        }
      }
    });

    // this.commonUtilSvc.getPermission$().subscribe((res: any) => {
    //   const excludeProviders: any[] = ['vivogaming', 'ballagames', 'pragmaticplaylivecasino', 'bti', 'evolutiongv', 'ezugigv']
    //   this.ProviderList = Object.keys(res).filter(p => !excludeProviders.includes(p) && res[p])
    //   this.GameCmsService.AllSlotGames().subscribe((allGame: any) => {
    //     this.AllSlotGames = allGame
    //     this.ProviderName = this.ProviderList[0]
    //     this.Games = this.AllSlotGames[this.ProviderList[0]] || []

    //     this.loadInitialGames();
    //     if (this.Games) {
    //       this.hideLoader()
    //     }
    //   })

    // })

    this.GameCmsService.getproviderList().subscribe((resData) => {
      console.log(resData)
      this.ProviderList = resData ? resData.filter((provider: any) => provider.status === true) : [];
      this.GameCmsService.AllSlotGames().subscribe((resDataGames) => {
        console.log(resDataGames)
        this.AllSlotGames = resDataGames
        if (this.ProviderList.length > 0) {
          this.ProviderName = this.ProviderList[0].name
          this.Games = this.AllSlotGames[this.ProviderList[0]?.name] || []
        } else {
          this.ProviderName = '';
          this.Games = [];
        }
        console.log(this.Games)
        this.loadInitialGames();
        if (this.Games) {
          this.hideLoader()
        }
      })
    })
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
  get totalPages() {
    return Math.ceil(this.Games.length / this.itemsPerPageCount);
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
  providerChange(provider: any) {
    this.showLoader();

    this.ProviderName = provider;
    console.log(this.ProviderName)
    // Set Games first
    this.Games = this.AllSlotGames?.[provider] ?? [];
    console.log(this.Games)
    // Reset list
    this.loadedGames = [];

    // First 40 load
    this.loadInitialGames();

    this.hideLoader();
  }

  loadInitialGames() {
    const firstGames = this.Games.slice(0, this.initialLoad);
    this.loadedGames = [...firstGames];
  }
  loadMoreGames() {
    if (!this.Games || this.Games.length === 0) return;  // 🛑 STOP if no games loaded yet
    if (this.isLoadingMore) return;

    const start = this.loadedGames.length;
    const end = start + this.loadBatch;

    const nextGames = this.Games.slice(start, end);

    this.isLoadingMore = true;

    setTimeout(() => {
      this.loadedGames = [...this.loadedGames, ...nextGames];
      this.isLoadingMore = false;
    }, 800);
  }

  navigates(route: any) {
    this.router.navigate([route])
  }
  vivoSession(data: any) {
    this.TokenData = data.token
    this.rocketManGameUrl = data.rocketManGameUrl
    this.operatorId = data.operatorId
    this.men5Url = data.menUrl
    this.platipusGameUrl = data.platipusGameUrl
    this.arrowEdgeGameUrl = data.arrowEdgeGameUrl
    this.rocketManGameUrl = data.rocketManGameUrl
    this.tomhornGameUrl = data.tomhornGameUrl
    this.token = data.token
    this.operatorId = data.operatorId
    this.serverId = data.serverId
    this.homeUrl = data.homeUrl
    this.currency = data.currency
  }
  urlSafeLauch(url: any) {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    if (this.urlSafe) {
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
  }
  habanaroGm(gameName: any, gameType: any) {
    if (this.playerLoggedIn) {
      this.keyname = gameType;
      let profile = sessionStorage.getItem('raj_wSession');
      this.GameCmsService.heblounchSession(profile, this.keyname).subscribe(data => {
        if (data.STATUS == 'SUCCESS') {
          const gamelunchurl = data?.URL;
          if (gamelunchurl) {
            this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(gamelunchurl);
            this.moveToTop();
          }
        } else {
          this.messageservice.error('Failed',
            data.Message)
        }

      },
      );
    } else if (this.playerLoggedIn == false) {
      this.showPopUp('LOGIN')
    }
  }
  habanaroGmOLD(gameName: any, gameType: any) {
    if (this.playerLoggedIn) {
      this.keyname = gameType;
      if (this.tokendata == null) {
        var profile = sessionStorage.getItem('raj_wSession');
        this.GameCmsService.heblounchSession(profile, this.keyname).subscribe(data => {
          this.HBslotsdata = data;
          this.tokendata = this.HBslotsdata.TOKEN;
          if (this.tokendata) {
            let gamelunchurl = this.HBslotsdata.HABANERO_GAMING_URL + 'brandid=' + this.HBslotsdata.BRAND_ID + '&keyname=' + this.keyname + '&token=' + this.HBslotsdata.TOKEN + '&mode=real&locale=en';
            this.urlSafeLauch(gamelunchurl)
          }
        },
        );
      } else if (this.tokendata != null) {
        let gamelunchurl = this.HBslotsdata.HABANERO_GAMING_URL + 'brandid=' + this.HBslotsdata.BRAND_ID + '&keyname=' + this.keyname + '&token=' + this.HBslotsdata.TOKEN + '&mode=real&locale=en';
        this.urlSafeLauch(gamelunchurl)
      }
    } else if (this.playerLoggedIn == false) {
      this.showPopUp('LOGIN')

    }

  }
  FivemenLauch(gameId: any) {
    if (this.playerLoggedIn) {
      let url = this.men5Url + "tableguid=1DFE4EC22BF545ECB37EAF2D07BE9515" + "&OperatorId=" + this.operatorId + "&token=" + this.token + "&gameid=" + gameId + "&client=778877"
      this.urlSafeLauch(url)
    } else {
      this.showPopUp('LOGIN')
    }
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
      this.playerservice.closesession(body).subscribe((data: any) => {
        console.log(data);
      })
      this.playerservice.gameclose(session).subscribe((data: any) => {
        console.log(data)
      })
    }
  }
  onJDBGames(gType: any, mType: any) {
    if (this.playerLoggedIn) {
      this.GameCmsService.jdbLaunch(gType, mType).subscribe(((data: any) => {
        if (data.path) {
          this.urlSafeLauch(data.path)
        }
      }))
    } else {
      this.showPopUp("LOGIN")
    }
  }
  evolutiongms(name: any, gameName: any) {
    if (this.playerLoggedIn == true) {
      let wsessionid = sessionStorage.getItem('raj_wSession')
      this.GameCmsService.getEzugi(wsessionid).subscribe(data => {
        let evourl: any = `${data.EZUGI_GAME_URL}platformId=0&operatorId=${data.EZUGI_OPERATOR_ID}&token=${data.EZUGI_TOKEN}&openTable=${name}`
        this.urlSafeLauch(evourl)
      })
    } else {
      this.showPopUp('LOGIN')
    }

  }

  platipusLaunch(data: any) {
    if (this.playerLoggedIn) {
      let url = this.platipusGameUrl + "token=" + this.token + "&operatorID=" + this.operatorId + "&room=125" + "&gameconfig=" + data
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(url);
      console.log(url)
      this.urlSafeLauch(url)
    } else {
      this.showPopUp('LOGIN')

    }
  }
  endrophinaLunchreal(data: any, game: any) {
    let gameid: any = data
    if (this.playerLoggedIn) {
      this.GameCmsService.endorphinaGames(sessionStorage.getItem('raj_wSession'), gameid).subscribe(data => this.Endorphinares(data))
    } else {
      this.showPopUp('LOGIN')
    }
  }
  Endorphinares(data: any) {
    console.log(data)
    let url = "https://cdn.endorphina.network/api/sessions/seamless/rest/v1?exit=" + data.exit + "&nodeId=" + data.nodeId + "&token=" + data.token + "&sign=" + data.sign
    this.urlSafeLauch(url)
  }
  tonhornLaunch(data: any) {
    if (this.playerLoggedIn) {
      let url = "https://www.2vivo.com/FlashRunGame/Prod/RunTomHornGame.aspx?" + "GameID=" + data + "&Token=" + this.token + "&lang=EN&OperatorID=" + this.operatorId
      console.log(url)
      this.urlSafeLauch(url)
    } else {
      this.showPopUp('LOGIN')
    }
  }
  nucluesLaunch(data: any) {
    if (this.playerLoggedIn) {
      let url = "https://2vivo.com/FlashRunGame/set2/RunNucGame.aspx?" + "token=" + this.token + "&operatorid=" + this.operatorId + "&GameID= " + data
      console.log(url)
      this.urlSafeLauch(url)
    } else {
      this.showPopUp('LOGIN')
      // this.casinogamessuccessPop = true

    }
  }
  onaviatrix(data: any) {
      if (!this.playerLoggedIn) {
    this.showPopUp('LOGIN');
    return;
  }
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

  }
 gvproviderapi(data: any) {
  if (!this.playerLoggedIn) {
    this.showPopUp('LOGIN');
    return;
  }

  let body = {
    gameId: data.id || data.gameId,
    provider: data.provider,
    language: "en"
  };

   this.playerservice.gvproviderapi(body).subscribe({
    next: (res: any) => {
      if (res?.token) {
        sessionStorage.setItem('closeGameSession', res.token);
      }

      if (res?.url) {
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(res.url);
        this.moveToTop();
      } else {
        this.showErrorPopup(
          'Launch Failed',
          res?.message || 'Unable to launch game'
        );
      }
    }
  });
}
showErrorPopup(title: string, message: string) {
  this.messageservice.error(title, message);
}
  on18Peaches(data: any) {
    if (!this.playerLoggedIn) {
      this.showPopUp('LOGIN')
      return;
    }
    let body = {
      "gameId": data.gameId,
      "provider": data.provider,

    }
    this.playerservice.get18peaches(body).subscribe((data: any) => {
      if (data) {
        sessionStorage.setItem('closeGameSession', data.token);

        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(data.url);
        if (this.urlSafe) {
          this.moveToTop()
        }
      }
    })

  }
  onLaunchPragmatic(data: any, gameName: any) {

    if (this.playerLoggedIn) {
      this.playerservice.getPragmaticHit(data).subscribe((data: any) => {
        console.log(data)
        if (data && data.gameURL) {
          let url = data.gameURL
          this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(url);
          if (this.urlSafe) {
            this.moveToTop()
          }
        }
      })
    } else {
      this.showPopUp('LOGIN')
    }

  }
  vivogameLaunch(game: any) {
    if (this.playerLoggedIn) {

      this.playerservice.gamelunallproviders(game).subscribe((response: any) => {
        if (response.url) {
          this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(response.url);
          if (this.urlSafe) {
            this.moveToTop()
          }
        }
        console.log(response)
      })
    } else {
      this.showPopUp('LOGIN');

    }
  }
  kingmidasmethod(game: any) {
    if (this.playerLoggedIn) {
      let body = {
        "gameId": game.gameId, "provider": game.provider
      }
      this.playerservice.kingmidaslaunch(body).subscribe((res: any) => {
        if (res.success) {
          this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(res.url);
          if (this.urlSafe) {
            this.moveToTop()
          }
        } else {
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
