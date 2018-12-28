import { PipeTransform, Pipe } from "@angular/core";
import * as moment from "moment";

@Pipe({name: "categoryDisplay"})
export class CategoryDisplayPipe implements PipeTransform {
    transform(value: string, date: moment.Moment): string {
        if (!date || typeof date.isValid !== "function" || !(date.isValid())) {
            return value;
        }

        if (value === "Available this month") {
            return "Available in " + date.format("MMM");
        } else if (value === "Available next month") {
            return "Available in " + moment.utc(date).add(1, "months").format("MMM");
        } else {
            return value;
        }
    }
}
