import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MessageComponent } from './reusables/message/message.component';
import { MessageService } from './reusables/message/message.service';
import { PlayerService } from './core/services/player/player.service'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MessageComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = signal('rajpoker');
  urlTokenForgot: any;
  urlEventTypeForgot: any;

  constructor(
    private messageService: MessageService,
    private redirectService: PlayerService,
    private router: Router
  ) {
    const params1 = new URLSearchParams(window.location.search);
    console.log(params1)
 this.urlTokenForgot = params1.get('token');
    this.urlEventTypeForgot = params1.get('eventType'); 
 sessionStorage.setItem('TokenForgo' , this.urlTokenForgot);
 sessionStorage.setItem("EventTypeForgot" , this.urlEventTypeForgot);
 setTimeout(() => {
   this.initializeApp();  
 }, 3000);

    const url = new URL(window.location.href);
    const path = url.pathname;
    const params = url.searchParams;

    this.redirectService.handleRedirect(path, params);
  } 
  initializeApp() {
    document.addEventListener('DOMContentLoaded', () => {
      const preloader = document.getElementById('preloader');
      if (preloader) preloader.style.display = 'none';
    });
  } 
  ngAfterViewInit(): void {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 150);
    }
  }
}
