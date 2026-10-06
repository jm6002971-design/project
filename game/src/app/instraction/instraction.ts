import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-instraction',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './instraction.html',
  styleUrl: './instraction.css'
})
export class Instraction {
  url: any;
  constructor(){
    this.url = window.location.hostname 
 
  }

}
