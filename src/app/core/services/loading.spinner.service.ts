import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class LoadingSpinnerService {
    public loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    public startSpinning(): void {
        this.loading.next(true);
    }

    public stopSpinning(): void {
        this.loading.next(false);
    }
}
