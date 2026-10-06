import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
export interface Message {
 
  id: number;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private nicknameSource = new BehaviorSubject<string>('');
  nickname$ = this.nicknameSource.asObservable();

  setNickname(name: string) {
    this.nicknameSource.next(name);
  }

  
  private messages: Message[] = [];
  private messageSubject = new BehaviorSubject<Message[]>([]);

  getMessages() {
    return this.messageSubject.asObservable();
  }

  success(title: string, content: string) {
    this.add({ type: 'success', title, content });
  }

  error(title: string, content: string) {
    this.add({ type: 'error', title, content });
  }

  info(title: string, content: string) {
    this.add({ type: 'info', title, content });
  }

  warning(title: string, content: string) {
    this.add({ type: 'warning', title, content });
  }

  private add(data: Omit<Message, 'id'>) {
    const message: Message = {
      id: Date.now(),
      ...data
    };

    this.messages.push(message);
    this.messageSubject.next([...this.messages]);
  }

  remove(id: number) {
    this.messages = this.messages.filter(m => m.id !== id);
    this.messageSubject.next([...this.messages]);
  }

  clearAll() {
    this.messages = [];
    this.messageSubject.next([]);
  }
}