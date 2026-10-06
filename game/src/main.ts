import './polyfills'; 
import { BrowserModule, Meta, Title, bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { RouterModule, provideRouter } from '@angular/router';
import { ReplacePipe } from './app/reusables/pipes/replace.pipe';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { provideStore } from '@ngrx/store';
import { AppReducer } from './app/core/appstates/appState';
import { provideEffects } from '@ngrx/effects';
import { LoginEffects } from './app/core/appstates/loginstates/loginEffects';
import { PlayerEffects } from './app/core/appstates/playerstates/playerEffects';
import { CashierEffects } from './app/core/appstates/cashierstates/cashierEffects';
import { routes } from './app/app.routes';
import { PlaceholderDirective } from './app/reusables/PlaceholderDirective';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
 
bootstrapApplication(App,
  {
    providers: [
      { provide: MAT_DATE_FORMATS, useValue: MAT_DATE_FORMATS },
      BrowserModule,
      Meta,
      Title,  
      RouterModule, 
      ReplacePipe,
      HttpClientModule, 
      CommonModule,
      ReactiveFormsModule,
      provideHttpClient(),
      provideStore(AppReducer),
      provideEffects([LoginEffects, PlayerEffects, CashierEffects]),
      provideRouter(routes),
      PlaceholderDirective,

      // importProvidersFrom(
      //   TranslateModule.forRoot({
      //     loader: {
      //       provide: TranslateLoader,
      //       // useFactory: HttpLoaderFactory,
      //       deps: [HttpClient],
      //     }
      //   })
      // ), 
      provideAnimationsAsync(), 
    ],

    ...appConfig.providers
  })
  .catch((err) => console.error(err));
 
 