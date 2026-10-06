import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteauthGuard } from '../../auth/routeauth.guard';

const routes: Routes = [
 {
    path: '',
    loadComponent: () =>
      import('./dashboard/dashboard').then((m) => m.Dashboard),
     canActivate: [RouteauthGuard],
    children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' },

      { path: 'profile', loadComponent: () => import('./specification/specification.component').then((m) => m.SpecificationComponent) },
      { path: 'bank', loadComponent: () => import('../../bank/bank').then((m) => m.Bank)},
      { path: 'payments', loadComponent: () => import('./cashier/cashier').then((m) => m.Cashier) },
      { path: 'balance', loadComponent: () => import('./balance/balance').then((m) => m.Balance) },
      { path: 'exchange', loadComponent: () => import('./exchange/exchange').then((m) => m.Exchange) },
      { path: 'rakeback', loadComponent: () => import('./rakeback/rakeback').then((m) => m.Rakeback) },
      { path: 'pokerhistory', loadComponent: () => import('./pokerhistory/pokerhistory').then((m) => m.Pokerhistory) },
      { path: 'casinohistory', loadComponent: () => import('./casinohistory/casinohistory').then((m) => m.Casinohistory) },
      { path: 'transaction', loadComponent: () => import('./transaction/transaction').then((m) => m.Transaction) },
      { path: 'ptoptransfer', loadComponent: () => import('./ptop/ptop').then((m) => m.Ptop) },
      { path: 'depositPage', loadComponent: () => import('./depositpage/depositpage').then((m) => m.Depositpage)}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { 



}
