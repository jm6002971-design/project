import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './dashboard/dashboard.html',
  styleUrl: './dashboard/dashboard.css'
})
export class Dashboard {
constructor(){ 
}
}
