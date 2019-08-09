import { Injectable } from '@angular/core';
import { EnvelopeModel } from 'src/app/core/models';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class EnvelopesSelectionService {
    public selectedEnvelope = new BehaviorSubject<EnvelopeModel | undefined>(undefined);

    constructor() {
    }
}
