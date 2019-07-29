import { Component } from "@angular/core";
import { Store, Action, select } from "@ngrx/store";
import { Actions, ofType } from "@ngrx/effects";

import { BudgetModel } from "../../../core/models/index";
import { NotificationsService } from "../../../core/services/index";
import { Observable, BehaviorSubject ,  combineLatest } from "rxjs";
import { OnInit } from "@angular/core";
import { IBudgetsState, getDeletingBudget, getShowDelete, getIsDeleting } from "../../../core/reducers/budget.reducer";
import { DeleteBudgetAction, BudgetActionTypes, DeleteBudgetFailureAction, HideDeleteBudgetAction } from "../../../core/actions/budget.actions";
import { map, first } from "rxjs/operators";

@Component({
    selector: "moneteer-budget-delete",
    templateUrl: "./budget.delete.component.html",
    styleUrls: ["./budget.delete.component.scss"],
})
export class BudgetDeleteComponent implements OnInit {
    public isOpen$: Observable<boolean>;
    public isDeleting$: Observable<boolean>;
    public budget$: Observable<BudgetModel | null>;
    public confirmName$: BehaviorSubject<string> = new BehaviorSubject<string>("");
    public error$: Observable<string> = new Observable<string>();

    constructor(
        private notificationsService: NotificationsService,
        private store: Store<IBudgetsState>,
        private actions$: Actions) { }

    public ngOnInit(): void {
        this.budget$ = this.store.pipe(select(getDeletingBudget));
        this.isOpen$ = this.store.pipe(select(getShowDelete));
        this.isDeleting$ = this.store.pipe(select(getIsDeleting));
        
        this.error$ = this.actions$.pipe(
            ofType(BudgetActionTypes.DeleteFailure),
            map((action: DeleteBudgetFailureAction) => action.payload.error)
        );

        this.actions$.pipe(
            ofType(BudgetActionTypes.DeleteSuccess)
        ).subscribe(() => this.confirmName$.next(""));
    }

    public close(): void {
        this.confirmName$.next("");
        this.store.dispatch(new HideDeleteBudgetAction());
    }

    public canDelete(): Observable<boolean> {
        return combineLatest(this.budget$, this.isDeleting$, this.confirmName$).pipe(
            first(),
            map(([budget, isDeleting, confirmName]) => {
                return !!budget && !!budget.name && budget.name.toLowerCase() === confirmName.toLowerCase() && !isDeleting;
            })
        );
    }

    public delete(): void {
        this.canDelete().pipe(first()).subscribe(cd => {
            if (!cd) return;

            this.budget$.pipe(first())
                .subscribe(b => {
                    if (!!b) {
                        this.store.dispatch(new DeleteBudgetAction({budget: b}));
                    }
                }
            );
        });
    }

}
