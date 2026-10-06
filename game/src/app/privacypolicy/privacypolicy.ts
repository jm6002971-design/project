import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-privacypolicy',
  imports: [CommonModule],
  templateUrl: './privacypolicy.html',
  styleUrl: './privacypolicy.css'
})
export class Privacypolicy {
constructor(){
this.moveToTop()
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
}
