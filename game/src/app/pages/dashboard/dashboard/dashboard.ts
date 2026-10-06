import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule, RouterOutlet],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css', 
})
export class Dashboard {
constructor(private router: Router){
  // this.router.navigate(['/dashboard/specification']);
}
}
