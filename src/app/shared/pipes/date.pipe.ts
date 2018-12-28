import { Pipe, PipeTransform, Injectable } from "@angular/core";
import { DatePipe } from "@angular/common";
import * as moment from "moment";

@Injectable()
@Pipe({name: "customDate"})
export class CustomDatePipe implements PipeTransform {
    constructor(private datePipe: DatePipe) {

    }

    public transform(value: moment.Moment, format: string): string {
        if (format === "M") {
            return value.format("MMM").charAt(0);
        } else {
            return this.datePipe.transform(value, format) || "";
        }
    }
}
