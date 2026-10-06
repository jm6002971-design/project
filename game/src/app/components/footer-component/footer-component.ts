import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';
import { DashboardRoutingModule } from "../../pages/dashboard/dashboard-routing-module";

@Component({
  selector: 'app-footer-component',
  imports: [CommonModule, DashboardRoutingModule],
  templateUrl: './footer-component.html',
  styleUrl: './footer-component.css'
})
export class FooterComponent {
  Domain: any = environment.Domain;

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
