import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService, Message } from './message.service';
import { Subscription } from 'rxjs';
import { PlayerService } from '../../core/services/player/player.service';
@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit, OnDestroy { 
  message: Message | null = null;
  private subscription!: Subscription;

  constructor(private messageService: MessageService,private playerservice: PlayerService) {}

  ngOnInit(): void {
    this.subscription = this.messageService
    .getMessages()
    .subscribe(messages => {
      this.message = messages.length ? messages[messages.length - 1] : null;
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
removeMessage(id: number): void {

  const currentMessage = this.message;

  // Call close session when launch fails
  if (
    currentMessage?.title === 'Launch Failed' ||
    currentMessage?.title === 'Server Error'
  ) {

    const token = sessionStorage.getItem('closeGameSession');

    if (token) {
      const body = {
        gameSession: token
      };

      this.playerservice.closesession(body).subscribe({
        next: (res: any) => {
          console.log('Session Closed', res);
        },
        error: (err: any) => {
          console.error('Close Session Error', err);
        }
      });

      sessionStorage.removeItem('closeGameSession');
    }
  }

  this.messageService.remove(id);

  if (
    currentMessage?.title === 'Authentication' &&
    currentMessage?.content === 'Please Wait for the email confirmation and verify'
  ) {
    this.messageService.success(
      'Authentication',
      'Verification emails can take time to arrive due to server delays or spam filters'
    );
  }
}
  // removeMessage(id: number): void {

  //   const currentMessage = this.message; // store current message
  //   console.log(currentMessage)
  //   this.messageService.remove(id);
  
  //   if (
  //     currentMessage?.title === 'Authentication' &&
  //     currentMessage?.content === 'Please Wait for the email confirmation and verify'
  //   ) {
  //     this.messageService.success(
  //       'Authentication',
  //       'Verification emails can take time to arrive due to server delays or spam filters'
  //     );
  //   }
  // }

  getIconClass(type: string) {
    switch (type) {
      case 'success': return 'fa-check-circle';
      case 'error': return 'fa-exclamation-circle';
      case 'warning': return 'fa-exclamation-triangle';
      case 'info': return 'fa-info-circle';
      default: return 'fa-info-circle';
    }
  }
 
}
