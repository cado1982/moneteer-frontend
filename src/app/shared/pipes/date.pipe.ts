import { Pipe, PipeTransform, Injectable } from "@angular/core";
import { DatePipe, formatDate } from "@angular/common";
import * as moment from "moment";
import { isNullOrUndefined } from 'util';

@Injectable()
@Pipe({ name: "customDate" })
export class CustomDatePipe extends DatePipe implements PipeTransform {
    constructor(private window: WindowRef) {
        super(window.ln)
    }

    public transform(value: string): string | null {
        const language = navigator.language;
        console.log(language);
        return (value == "" || value == null) ? "" : formatDate(value, 'shortDate', language);
    }
}

function _window(): any {
    // return the global native browser window object
    return window;
}

@Injectable()
export class WindowRef {
    get nativeWindow(): any {
        return _window();
    }

    public ln = 'en';

    constructor() {
        try {
            if (!isNullOrUndefined(this.nativeWindow.navigator.language) && this.nativeWindow.navigator.language !== '') {
                this.ln = this.nativeWindow.navigator.language;
            }
        } finally { }
    }
}
