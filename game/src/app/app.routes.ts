import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: '',
    loadComponent: () =>
      import('./components/main-component/main-component')
        .then((m) => m.MainComponent),

    children: [

      {
        path: 'home',
        loadComponent: () =>
          import('./pages/home-page/home-page')
            .then((m) => m.HomePage),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./pages/home-page/home-page').then((m) => m.HomePage),
      },
      {
        path: 'terms-and-conditions',
        loadComponent: () =>
          import('./privacypolicy/privacypolicy').then((m) => m.Privacypolicy),
      },
      {
        path: 'referrer',
        loadComponent: () =>
          import('./pages/home-page/home-page').then((m) => m.HomePage),
      },
      {
        path: 'tournaments',
        loadComponent: () =>
          import('./pages/tournaments-page/tournaments-page')
            .then((m) => m.TournamentsPage),
      },

      {
        path: 'live-casino',
        loadComponent: () =>
          import('./pages/live-casino-page/live-casino-page')
            .then((m) => m.LiveCasinoPage),
      },

      {
        path: 'slots',
        loadComponent: () =>
          import('./pages/slot-machine-page/slot-machine-page')
            .then((m) => m.SlotMachinePage),
      },

      {
        path: 'sports',
        loadComponent: () =>
          import('./pages/sports-page/sports-page')
            .then((m) => m.SportsPage),
      },
      {
        path: 'crash',
        loadComponent: () =>
          import('./pages/crash-page/crash-page').then((m) => m.CrashPage),
      },
      {
        path: 'indiangames',
        loadComponent: () =>
          import('./pages/ballaGames/ballaGames.component').then((m) => m.BallaGamesComponent),
      },
      {
        path: 'promotion',
        loadComponent: () =>
          import('./promotion/promotion').then((m) => m.Promotion),
      },
      {
        path: 'leaderboard',
        loadComponent: () =>
          import('./pages/leaderboard-page/leaderboard-page')
            .then((m) => m.LeaderboardPage),
      },

      {
        path: 'myaccount',
        loadChildren: () =>
          import('./pages/dashboard/dashboard-routing-module')
            .then((m) => m.DashboardRoutingModule),
      },

      // IMPORTANT: keep dynamic route LAST
      {
        path: ':redirectKey',
        loadComponent: () =>
          import('./pages/home-page/home-page')
            .then(m => m.HomePage),
      }

    ],
  },

  {
    path: '**',
    redirectTo: 'home',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }