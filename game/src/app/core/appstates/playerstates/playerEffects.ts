import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable, inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { exhaustMap, map, catchError, tap } from 'rxjs/operators';

import * as playerActions from './playerActions';
import { PlayerService } from '../../services/player/player.service';
import { LoginService } from '../../services/login/login.service';
import { CashierService } from '../../services/cashier/cashier.service';
import { Profile } from '../../modules/player/profile';
import { Stats } from '../../modules/player/stats';
import { RemoteGamesHistory } from '../../modules/remotegamehistory/remotegamehistory';


const handleError = (error: any, ActionClass: any) => {
    if (error.error instanceof Error) {
        return of(new ActionClass({ "message": error.error.message }));
    } else {
        try {
            if (error.error?.message) {
                return of(new ActionClass({ "message": error.error.message }));
            } else if (error.message) {
                return of(new ActionClass({ "message": error.message }));
            }
            return of(new ActionClass({ "message": "Something went wrong, please contact admin" }));
        } catch (err) {
            console.log(err);
            return of(new ActionClass({ "message": "Something went wrong, please contact admin" }));
        }
    }
}

@Injectable()
export class PlayerEffects {
    // Use ONLY inject() - remove constructor
    private actions$ = inject(Actions);
    private playerService = inject(PlayerService);
    private loginService = inject(LoginService);
    private cashierservice = inject(CashierService);

    playerGetProfile$ = createEffect(() =>
        this.actions$.pipe(
            ofType(playerActions.PLAYER_GET_PROFILE),
            exhaustMap((action: playerActions.PlayerGetProfile) =>
                this.playerService.onPlayerGetProfile().pipe(
                    map((response: Profile) => new playerActions.PlayerGetProfileSuccess(response)),
                    catchError((error: HttpErrorResponse) => handleError(error, playerActions.PlayerGetProfileFail))
                )
            )
        )
    );

    playerGetProfileSuccess$ = createEffect(
        () =>
          this.actions$.pipe(
            ofType(playerActions.PLAYER_GET_PROFILE_SUCCESS),
            tap((action: playerActions.PlayerGetProfileSuccess) => { 
              console.log('Profile Success Action:', action); 
              const payload:any = action.payload;  
              if (payload?.code === 'SESSION_EXPIRED') {
                this.cashierservice.sessionExpire(true);
                this.loginService.onPlayerLoggedIn(false);
                return;
              } else {
                this.cashierservice.sessionExpire(false);
              }
      
              // Success case
              if (payload?.success === true) {
                sessionStorage.setItem(
                  'profile',
                  JSON.stringify(payload.login)
                );
      
                this.loginService.onPlayerLoggedIn(true);
              }
      
            })
          ),
        { dispatch: false }
      );
      
    playerUpdateProfile$ = createEffect(() =>
        this.actions$.pipe(
            ofType(playerActions.PLAYER_UPDATE_PROFILE),
            exhaustMap((action: playerActions.PlayerUpdateProfile) =>
                this.playerService.onPlayerUpdateProfile(action.payload).pipe(
                    map((response: Profile) => new playerActions.PlayerUpdateProfileSuccess(response)),
                    catchError((error: HttpErrorResponse) => handleError(error, playerActions.PlayerUpdateProfileFail))
                )
            )
        )
    );

    playerUpdatePassword$ = createEffect(() =>
        this.actions$.pipe(
            ofType(playerActions.PLAYER_UPDATE_PASSWORD),
            exhaustMap((action: playerActions.PlayerUpdatePassword) =>
                this.playerService.onPlayerUpdatePassword(action.payload).pipe(
                    map((response: Profile) => new playerActions.PlayerUpdatePasswordSuccess(response)),
                    catchError((error: HttpErrorResponse) => handleError(error, playerActions.PlayerUpdatePasswordFail))
                )
            )
        )
    );

    playerGetStats$ = createEffect(() =>
        this.actions$.pipe(
            ofType(playerActions.PLAYER_GET_STATS),
            exhaustMap((action: playerActions.PlayerGetStats) =>
                this.playerService.onPlayerGetStats().pipe(
                    map((response: Stats) => new playerActions.PlayerGetStatsSuccess(response)),
                    catchError((error: HttpErrorResponse) => handleError(error, playerActions.PlayerGetStatsFail))
                )
            )
        )
    );

    playerGetPlayerLevels$ = createEffect(() =>
        this.actions$.pipe(
            ofType(playerActions.PLAYER_GET_PLAYERLEVELS),
            exhaustMap((action: playerActions.PlayerGetPlayerLevels) =>
                this.playerService.onPlayerGetPlayerLevels().pipe(
                    map((response) => new playerActions.PlayerGetPlayerLevelsSuccess(response)),
                    catchError((error: HttpErrorResponse) => handleError(error, playerActions.PlayerGetPlayerLevelsFail))
                )
            )
        )
    );

    playerGetRemoteGameHistory$ = createEffect(() =>
        this.actions$.pipe(
            ofType(playerActions.PLAYER_GET_REMOTE_GAME_HISTORY),
            exhaustMap((action: playerActions.PlayerGetRemoteGameHistory) =>
                this.playerService.onPlayerGetRemoteGameHistory(action.payload).pipe(
                    map((response: RemoteGamesHistory) => new playerActions.PlayerGetRemoteGameHistorySuccess(response)),
                    catchError((error: HttpErrorResponse) => handleError(error, playerActions.PlayerGetRemoteGameHistoryFail))
                )
            )
        )
    );
}