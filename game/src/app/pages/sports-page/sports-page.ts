import { CommonModule } from '@angular/common';
import { Component, ComponentFactoryResolver, ElementRef, NgModule, OnDestroy, SecurityContext, ViewChild, ViewContainerRef } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { GameCmsService } from '../../core/services/games_cms/game-cms.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import * as loginActions from '../../core/appstates/loginstates/loginActions'
import { LoginComponent } from '../../auth/login/login';
import { AppState } from '../../core/appstates/appState';
import { Store } from '@ngrx/store';
import { LoginState } from '../../core/appstates/loginstates/loginState';
import { environment } from '../../../environments/environment';

@Component({
  standalone: true,
  selector: 'app-sports-page',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './sports-page.html',
  styleUrl: './sports-page.css'
})
export class SportsPage implements OnDestroy {
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
  playerLoggedIn: boolean = false
  private closeSub!: Subscription;
  loginstate: string = '';
  responseLoader = false;
  loaderKey = Date.now();
  SportUrl: any = "https://prod20278-inr-143521651.442hattrick.com"
  // SportUrl: any = "https://prod20278-inr-143521651.bti-sports.io"
  domainName: any = environment.Domain
  @ViewChild('alertHost', { read: ViewContainerRef }) alertHost!: ViewContainerRef;
  @ViewChild('gameIframe', { static: false }) gameIframe!: ElementRef;
  constructor(private store: Store<AppState>, private router: Router, private GameCmsService: GameCmsService,
    private sanitizer: DomSanitizer, private componentFactoryResolver: ComponentFactoryResolver,) {}
  ngOnInit() {
 this.showLoader();
    this.moveToTop()
setTimeout(()=>{
  this.store.select("loginState").subscribe((loginState: LoginState) => {
    console.log(loginState.playerLoggedIn)
    if (loginState.playerLoggedIn) {
      this.playerLoggedIn = loginState.playerLoggedIn.loggedIn;
        if (this.playerLoggedIn) {
        this.SportLauchGame()
      } else {
        let url = `${this.SportUrl}/en/spbk?api=${this.domainName}/assets/js/btisports.js?v=2&operatorToken=logout`;
        console.log(url)
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        if (this.urlSafe) {
          this.moveToTop()
        }
      }
    }
  });

}, 1500)
  }
  showLoader() {
    this.loaderKey = Date.now(); // 🔥 force gif reload
    this.responseLoader = true;
  }
  hideLoader() {
    this.responseLoader = false;
  }
  SportLauchGame() {
    let wSession: any = sessionStorage.getItem('raj_wSession')
    this.GameCmsService.SportToken(wSession).subscribe((data: any) => {
      console.log(data)
      this.hideLoader();
     let  preloader =  document.getElementById('loadernone') 
     if(preloader){
       preloader.style.display = 'none';
     }
     var EventId = localStorage.getItem("EventId");
      var selectionId = localStorage.getItem("selectionsId");
      var url: any;
       if (EventId && selectionId) {
        url = `${this.SportUrl}/en/spbk?api=${this.domainName}/assets/js/btisports.js?v=2&eventId=${EventId}&selectionId=${selectionId}&operatorToken=${data.token}`
      } else{
          url = `${this.SportUrl}/en/spbk?api=${this.domainName}/assets/js/btisports.js?v=2&operatorToken=${data.token}`;
        }
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(url);
      if (this.urlSafe) {
        this.moveToTop()
      }
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
  navigates(route: any) {
    this.router.navigate([route])
  }
  toggleFullScreen(): void {
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
    this.router.navigate(['/home']);
  }
  ngOnDestroy() {
    (window as any).$crisp?.push(["do", "chat:show"]);
  }
}
