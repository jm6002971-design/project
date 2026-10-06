import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '../../appstates/appState';
import { LoginState } from '../../appstates/loginstates/loginState';
import { BehaviorSubject, Observable, shareReplay, tap } from 'rxjs';
import { environment } from '../../../../environments/environment';
@Injectable({
    providedIn: 'root'
}) export class CommonUtilService {
    private playerProviderListSubject = new BehaviorSubject<any | null>(null);
    public playerProviderList$ = this.playerProviderListSubject.asObservable();

    private permissionMapSubject = new BehaviorSubject<Record<string, boolean>>({});
    public permissionMap$ = this.permissionMapSubject.asObservable();
    playerLoggedIn: boolean = false;
    constructor(private httpClient: HttpClient, private store: Store<AppState>) {

    }

    httpOptions() {
        let options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'siteid': environment.skinId,
                'wsession': sessionStorage.getItem('raj_wSession') || ''
            })
        };
        return options;
    }

    loadCashbalanceBasedOnCurrency(walletObjs: any, walletName: any, key: any) {
        let res = 0;
        if (walletObjs) {
            walletObjs.forEach((wobj: any) => {
                if ("wallet" in wobj && "name" in wobj["wallet"] &&
                    wobj["wallet"]["name"].toLowerCase() == walletName.toLowerCase()
                    && key in wobj) {
                    res = wobj[key]["value"];
                }
            })
        }
        return this.getRoundedOffNumber(res);
    }
    loadAppPreferredCurrency(walletObjs: any) {
        let appCurrency = "NOT FOUND";
        if (walletObjs) {
            walletObjs.forEach((wobj: any) => {
                if ("wallet" in wobj && "name" in wobj["wallet"] &&
                    !(["PLAYMONEY", "COMPPOINTS"].includes(wobj["wallet"]["name"]))) {
                    appCurrency = wobj["wallet"]["name"];
                }
            })
        }
        return appCurrency;
    }

    addNumbers(arr: any) {
        let s = 0;
        arr.forEach((k: any) => { if (k) s += Number(k) });
        return s;
    }

    getRoundedOffNumber(n: any) {
        if (n) {
            n = Number(n).toFixed(2);
        }
        return n;
    }


    fetchProviderList() {
        return this.httpClient.post<any>(`${environment.baseUrl}${environment.api.player.getProviders}`, {}, this.httpOptions()).pipe(
            tap(res => {

                this.playerProviderListSubject.next(res);

                const permissinonMap = res?.reduce((acc: any, p: any) => {
                    acc[p.name.toLowerCase()] = true;
                    return acc;
                }, {});
                this.permissionMapSubject.next(permissinonMap)
            }),
            shareReplay(1)
        )
    }

    fetchPlayerProviderList(body: any) {
        return this.httpClient.post<any>(`${environment.baseUrl}${environment.api.player.playerProviderList}`, body, this.httpOptions()).pipe(
            tap(res => {

                this.playerProviderListSubject.next(res)
                const permissinonMap = res?.reduce((acc: any, p: any) => {
                    acc[p.name.toLowerCase()] = !!p.status;
                    return acc;
                }, {});

                this.permissionMapSubject.next(permissinonMap)
            }),
            shareReplay(1)
        );
    }

    getPlayerProviderList(body: any) {
        const currentValue = this.playerProviderListSubject.value
        if (currentValue) {
            return this.playerProviderList$;
        }
        return body ? this.fetchPlayerProviderList(body) : this.fetchProviderList();
    }

    hasPermission(provider: any) {
        return !!this.permissionMapSubject.value?.[provider.toLowerCase()];
    }

    hasAnyPermission(providers: string[]) {
        return providers.some(p => this.hasPermission(p));
    }

    hasAllPermission(providers: string[]) {
        return providers.every(p => this.hasPermission(p));
    }

    getPermission$() {
        return this.permissionMap$;
    }

    clearPermission() {
        this.playerProviderListSubject.next(null)
        this.permissionMapSubject.next({});
    }
}