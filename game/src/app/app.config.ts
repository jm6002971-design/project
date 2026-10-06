import {
  ApplicationConfig,
  provideZoneChangeDetection
} from '@angular/core';

import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import { routes } from './app.routes';
import { AppReducer } from './core/appstates/appState';

import { LoginEffects } from './core/appstates/loginstates/loginEffects';
import { PlayerEffects } from './core/appstates/playerstates/playerEffects';
import { CashierEffects } from './core/appstates/cashierstates/cashierEffects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient(),

    // ⭐ FIXED STORE REGISTRATION
    provideStore({
      loginState: AppReducer.loginState,
      playerState: AppReducer.playerState,
      cashierState: AppReducer.cashierState
    }),

    provideEffects([LoginEffects, PlayerEffects, CashierEffects]),
  ]
};
