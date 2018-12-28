import { startWith } from "rxjs/operators";
import { ReplaySubject, fromEvent } from "rxjs";
import { Injectable } from "@angular/core";

import { ScreenSize } from "../../shared/models/index";

@Injectable()
export class MediaQueryService {
    public mediaSize: ReplaySubject<ScreenSize>;

    constructor() {
        this.mediaSize = new ReplaySubject<ScreenSize>();

        /*fromEvent(window, "resize").
            startWith()
            .subscribe((event: any) => {
                const screenSize: ScreenSize = this.getScreenSizeFromWidth(event.target.innerWidth);
                this.mediaSize.next(screenSize);
            });*/
    }

    private getScreenSizeFromWidth(width: number): ScreenSize {
        if (width >= 0 && width < 935) {
            return ScreenSize.xs;
        } else if (width >= 935 && width < 1195) {
            return ScreenSize.s;
        } else if (width >= 1195 && width < 1455) {
            return ScreenSize.m;
        } else if (width >= 1455 && width < 1720) {
            return ScreenSize.l;
        } else if (width >= 1720) {
            return ScreenSize.xl;
        } else {
            return ScreenSize.xl;
        }
    }
}
