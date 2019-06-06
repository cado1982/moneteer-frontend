import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'pairs' })
export class PairsPipe implements PipeTransform {
    transform(obj: any): any[] {
        if (Array.isArray(obj) || !this.isObject(obj)) {
            return obj;
        }

        return Object.entries(obj);
    }

    private isObject(value: any): Boolean {
        return value !== null && typeof value === 'object';
    }
}