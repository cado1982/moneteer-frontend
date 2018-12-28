import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { MediaQueryService } from '../../../core/services/index';

@Component({
    selector: 'moneteer-month-selector',
    templateUrl: './month.selector.component.html',
    styleUrls: ['./month.selector.component.scss']
})
export class MonthSelectorComponent implements OnInit {
    private monthFormat: string;
    public selectedMonth: BehaviorSubject<moment.Moment> = new BehaviorSubject<moment.Moment>(moment());

    constructor(
        private mediaQueryService: MediaQueryService,
        private route: ActivatedRoute,
        private router: Router,
        private changeDetector: ChangeDetectorRef) {

    }

    public ngOnInit(): void {

        this.route.params.subscribe(p => {
            const year = p.year;
            const month = p.month;

            this.selectedMonth.next(moment.utc({ year: year, month: month - 1 }))
        });
        this.monthFormat = 'M';
        //this.mediaQueryService.mediaSize.subscribe(this.onResize.bind(this));
    }

    //private onResize(size: ScreenSize) {
    //    switch (size) {
    //        case ScreenSize.xs: {
    //            this.monthFormat = 'M';
    //            break;
    //        }
    //        case ScreenSize.s: {
    //            this.monthFormat = 'M';
    //            break;
    //        }
    //        case ScreenSize.m:
    //        case ScreenSize.l: {
    //            this.monthFormat = 'MMM';
    //            break;
    //        }
    //        case ScreenSize.xl: {
    //            this.monthFormat = 'MMMM';
    //            break;
    //        }
    //        default: {
    //            throw new Error('Unexpected screensize');
    //        }
    //    }
    //}

    public forward(): void {
        const year = this.route.snapshot.params.year;
        const month = this.route.snapshot.params.month;

        const newMonth = moment.utc({ year: year, month: month - 1 }).add(1, 'month');

        this.router.navigate([newMonth.year(), newMonth.month() + 1], { relativeTo: this.route.parent });
    }

    public back(): void {
        const year = this.route.snapshot.params.year;
        const month = this.route.snapshot.params.month;

        const newMonth = moment.utc({ year: year, month: month - 1 }).add(-1, 'month');

        this.router.navigate([newMonth.year(), newMonth.month() + 1], { relativeTo: this.route.parent });
    }
}
