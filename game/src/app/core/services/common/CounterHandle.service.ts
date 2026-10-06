import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CounterHandle {

    public counterStatus: Subject<any> = new Subject<any>();
    private currentCounterStatus: boolean = true;
    throwCounterStatus(status:any) {
        if (status != this.currentCounterStatus) {
            this.counterStatus.next({ status: status });
            this.counterStatus = status;
        }
    }
    userMoving() {
        this.counterStatus.next(true);
    }
    stopCounter() {
        if (this.currentCounterStatus) {
            this.counterStatus.next({ status: status });
            this.currentCounterStatus = false;
        }
    }
    setCurrentCounterStatus(status:any) {
        this.currentCounterStatus = status;
    }
}
