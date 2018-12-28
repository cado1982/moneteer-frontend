export class GuidModel {
    constructor(public id: string) {
        if (!id) {
            this.id = "00000000-0000-0000-0000-000000000000";
        }
    }

    static empty = "00000000-0000-0000-0000-000000000000";
}
