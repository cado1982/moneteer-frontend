import { Injectable } from '@angular/core';
import { EnvelopeModel } from 'src/app/core/models';

@Injectable()
export class EnvelopesSelectionService {
    public selectedEnvelope: EnvelopeModel | undefined;

    constructor() {
    }
}
