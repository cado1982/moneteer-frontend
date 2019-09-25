import { TestBed, async } from '@angular/core/testing';
import { AssignIncomeService } from './assign-income.service';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { empty } from 'rxjs';
import { createService } from '@ngneat/spectator/jest';

describe('AssignIncomeService', () => {
    const spectator = createService<AssignIncomeService>({
        service: AssignIncomeService,
        imports: [
            RouterTestingModule
        ],
        providers: [
            provideMockStore({ initialState: {} }),
            provideMockActions(() => empty())
        ]
    });

    it('should be created', () => {
        expect(spectator.service).toBeTruthy();
    });
});
